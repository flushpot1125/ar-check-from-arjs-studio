const https = require("https");
const fs = require('fs');
const path = require("path");
const express = require("express"); 

const https_options ={
  key : fs.readFileSync('./certkeys/cert_server.key'),
  cert : fs.readFileSync('./certkeys/cert_server.crt')
};
const app = express();
app.use(express.static("public"));

const port =8080;
const webServer = https.createServer(https_options,app);
webServer.listen(port, () => {
  console.log("listening on https://localhost:" + port);
});