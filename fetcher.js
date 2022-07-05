const request = require('request')
const fs = require('fs');
const name = process.argv[3];
const website_name = process.argv[2];

request(website_name,(error,response,body) => {
  if (error) {
    console.log('error',error);
  }
  fs.writeFile(`${name}`, body, function(error) {
    if (error) {
      console.log("error:", error);
    } else {
      console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${name}`);
    }
  });
});