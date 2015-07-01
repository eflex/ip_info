var request = require('request');
var path = require("path");
var ipv4 = new RegExp(
  "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3,}$"
);

module.exports = function(ip) {
  if (!ipv4.test(ip)) throw new Error("Invalid IP Address");
  var target = "http://" + path.join("ipinfo.io", ip);
  var options = {
    url: target,
    headers: {
      "Content-Type": "application/json"
    }
  };

  return new Promise(function(resolve, reject){
      request(options, function(error, response, body) {
        if (error) return reject(error);
        if (response.statusCode != 200) return reject(new Error(
          "Server returned " + response.statusCode))
        return resolve(JSON.parse(body));
      });
  });
}
