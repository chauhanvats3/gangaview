exports.handler = async function (event, context) {
    const params = event.queryStringParameters;
    const dataset = JSON.parse(params.dataset);
    zoho_pass = process.env.ZOHO_AUTH_PASS;

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello " + dataset.first_name })
    };
}