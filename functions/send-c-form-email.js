const fs = require('fs').promises;
const nodemailer = require('nodemailer');




exports.handler = async function (event, context) {
    const params = event.queryStringParameters;
    const dataset = JSON.parse(params.dataset);

    const fileName = dataset.passport.number + ".json"

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
            content: JSON.stringify(dataset)
        }]
    });

    console.log("Message sent: %s", info);

    return {
        statusCode: 200,
        body: JSON.stringify({ info })
    };
}