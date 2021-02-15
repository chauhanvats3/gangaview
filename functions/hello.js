exports.handler = async function (event, context) {
    console.log(process.env.AUTH_PASS);
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" })
    };
}