const fs = require('fs').promises;
const nodemailer = require('nodemailer');


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

    //let fileStatus = await createJSONFile(dataset, fileName);

    /* if (!fileStatus.saved) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "File Was Not Saved!" })
        };
    }

    console.log("After Save") */
    let transporter;

    transporter = nodemailer.createTransport({
        host: process.env.ZOHO_HOST,
        port: process.env.ZOHO_PORT,
        secure: true,
        auth: {
            user: process.env.ZOHO_AUTH_USER,
            pass: process.env.ZOHO_AUTH_PASS
        }
    });

    let info = await transporter.sendMail({
        from: process.env.ZOHO_EMAIL_CONTACT,
        to: process.env.ZOHO_AUTH_USER,
        subject: `[C-Form] ${dataset.basic.f_name} ${dataset.basic.l_name}`,
        text: "Please Find an Attachment",
        attachments: [{   // utf-8 string as an attachment
            filename: fileName,
            content: JSON.stringify(data)
        }]
    });
    //JSON.stringify(data)

    console.log("Message sent: %s", info);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "File saved and Mail Sent!" }, { info })
    };
}