const nodemailer = require('nodemailer');
const nodeHtmlToImage = require('node-html-to-image')

exports.handler = async function (event, context) {
    const params = event.queryStringParameters;
    const dataset = JSON.parse(params.dataset);

    const jsonFileName = dataset.passport.number + ".json"
    const imageFileName = dataset.passport.number + ".png"
    let transporter;

    const fsPromises = require('fs').promises;
    const cFormHTML = await fsPromises.readFile('./static/cformImage.html')
        .catch((err) => console.error('Failed to read file', err));

    console.log("cformhtml : " + typeof cFormHTML.toString())

    const cFormImage = await nodeHtmlToImage({
        html: cFormHTML.toString(),
        content: { basic: dataset.basic, misc: dataset.misc, passport: dataset.passport, visa: dataset.visa }
    });
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
        attachments: [{
            filename: jsonFileName,
            content: JSON.stringify(dataset)
        }, {
            filename: imageFileName,
            content: cFormImage,
            contentType: 'image/png'
        }]
    });



    console.log("Message sent: %s", info);

    return {
        statusCode: 200,
        body: JSON.stringify({ info })
    };
}