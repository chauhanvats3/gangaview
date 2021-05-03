const nodeHtmlToImage = require('node-html-to-image')

exports.handler = async function (event, context) {
    const params = event.queryStringParameters;
    const dataset = JSON.parse(params.dataset);

    const fsPromises = require('fs').promises;
    const cFormHTML = await fsPromises.readFile('./static/cformImage.html')
        .catch((err) => console.error('Failed to read file', err));


    const cFormImage = await nodeHtmlToImage({
        html: cFormHTML.toString(),
        content: { basic: dataset.basic, misc: dataset.misc, passport: dataset.passport, visa: dataset.visa }
    });


    console.log("Image Created!");

    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'image/png',
        },
        body: cFormImage
    };
}