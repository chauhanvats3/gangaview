exports.handler = async function (event, context) {
    const params = event.queryStringParameters;

    console.log(process.env.ZOHO_AUTH_PASS);

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello " + params.email })
    };
}