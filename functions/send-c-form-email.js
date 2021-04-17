const fs = require('fs').promises;

let createJSONFile = async (data, name) => {
    await fs.writeFile(`files/${name}`, JSON.stringify(data), function (err) {
        if (err) {
            return { saved: false, "err": err }
        }
    });
    return { saved: true };
}

exports.handler = async function (event, context) {
    const params = event.queryStringParameters;
    const dataset = JSON.parse(params.dataset);

    const fileName = dataset.passport.number + ".json"

    let fileStatus = await createJSONFile(dataset, fileName);

    if (!fileStatus.saved) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "File Was Not Saved!" })
        };
    }

    console.log("After Save")

    zoho_pass = process.env.ZOHO_AUTH_PASS;

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "File saved and Mail Sent!" })
    };

}