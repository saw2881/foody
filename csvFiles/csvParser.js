// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {
//  if (req.url === '/') {
//     fs.readFile('C:/Users/sahas/exoressWeb/index.html', 'utf8', (err, data) => {
//       if (err) {
//         console.error('Error reading the HTML file:', err);
//         res.writeHead(500);
//         res.end('Internal Server Error');
//         return;
//       }

//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.end(data);
//     });
//  } else if (req.url === '/style.css') {
//     fs.readFile('C:/Users/sahas/exoressWeb/style.css', 'utf8', (err, data) => {
//       if (err) {
//         console.error('Error reading the CSS file:', err);
//         res.writeHead(500);
//         res.end('Internal Server Error');
//         return;
//       }

     
















// // const fs = require('fs');
// // const csv = require('csv-parser');

// // const csvFilePath = './Food_input.csv'; // Update with your CSV file path

// // const results = [];

// // fs.createReadStream(csvFilePath)
// //   .pipe(csv())
// //   .on('data', (data) => {
// //     results.push(data);
// //   })
// //   .on('end', () => {
// //     // Process the parsed CSV data
// //     console.log(results);
// //   })
// //   .on('error', (error) => {
// //     console.error('Error reading CSV:', error.message);
// //   });
