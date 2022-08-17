
const http = require('http');
// fileSystem module
const fs = require('fs');

const url = require('url');

const slugify = require('slugify');

const replaceTemplate = require('./templates/replaceTemplate');



// // const replaceTemplate = (temp, product) => {

// //     let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
// //     output = output.replace(/{%IMAGE%}/g, product.image);
// //     output = output.replace(/{%PRICE%}/g, product.price);
// //     output = output.replace(/{%FROM%}/g, product.from);
// //     output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
// //     output = output.replace(/{%QUANTITY%}/g, product.quantity);
// //     output = output.replace(/{%DESCRIPTION%}/g, product.description);
// //     output = output.replace(/{%ID%}/g, product.id);


// //     if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not+organic');
// //     return output;
// // }


const tempOverview = fs.readFileSync('./templates/overview.html', 'utf-8');
const tempCard = fs.readFileSync('./templates/template-card.html', 'utf-8');
const tempProduct = fs.readFileSync('./templates/producttemplate.html', 'utf-8');
const data = fs.readFileSync('./data.json', 'utf-8');
// to convert data in the json object we use Json.parse(data) method
const dataObj = JSON.parse(data);
console.log(dataObj);





const slug = dataObj.map(el => slugify(el.productName, { lower: true }));
console.log(slug);
// creating server with createServer methond
const server = http.createServer((req, res) => {
    // to get the url 

    const { query, pathname } = url.parse(req.url, true);
    


    // OVERVIEW PAGE
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });


        const cardHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardHtml);
        res.end(output);

    }
    // reading json data from data.json file
    // PRODUCT PAGE
    else if (pathname === '/product') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });

        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);

        res.end(output);
    }
    // API PAGE
    else if (pathanme === '/api') {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(data);
    }


    // to write our content in the header
    // NOT FOUND PAGE
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hekko workld'
        });
        res.end('Page not found');
    }
});

// code for listing server
server.listen(8000, 'localhost', () => {
    console.log("server stated ");
})



 
// const fs = require('fs');
// const http = require('http');
// const { Server } = require('http');
// const { Http2ServerRequest } = require('http2');

// const data = fs.readFileSync('./data.json', 'utf-8');
// const dataObj = JSON.parse(data);
// // console.log(data);
// // console.log(dataObj);
 
// const server = http.createServer((req, res)=>{

   


// const arr = dataObj.map( (element)=>{
//     return element.id;

// });
//  console.log(arr);

// });


// server.listen(8000,'localhost', ()=>{
//     console.log("yes \nwe are ready to accept request ");
// });







