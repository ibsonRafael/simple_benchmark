//const http = require("http");
const span = require("ansispan");
require("colors");


var express = require('express');
var app = express();
const port = 8080;

// respond with "hello world" when a GET request is made to the homepage
app.get('/api', function(req, res) {
    vk = 0;
    for(i=0;i<1000;i++){
        for(j=0;j<1000;j++){
            for(k=0;k<50;k++){
                vk = k;
            }
        }
    }
    res.send(span("Hello Node!".green));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
  
  

// http.createServer(function (request, response) {
//     vk = 0;
//     for(i=0;i<1000;i++){
//         for(j=0;j<1000;j++){
//             for(k=0;k<50;k++){
//                 vk = k;
//             }
//         }
//     }
//     response.writeHead(200, {"Content-Type": "text/html"});
//     response.end(span("Hello Graal.js!".green));
// }).listen(8000, function() { console.log("Graal.js server running at http://127.0.0.1:8000/".red); });

// //setTimeout(function() { console.log("DONE!"); process.exit(); }, 2000);
// //192.168.68.117