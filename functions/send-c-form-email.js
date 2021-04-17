exports.handler = async function (event, context) {
    const params = event.queryStringParameters;
    const dataset = JSON.parse(params.dataset);
    console.log("send : " + dataset.basic.f_name)
    zoho_pass = process.env.ZOHO_AUTH_PASS;

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello " + dataset.basic.f_name })
    };
}