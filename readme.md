Simple ipinfo module
============================
Returns a basic information of an IP by connecting to ipinfo.io
### Example
```javascript
var ipInfo = require("ip_info");
var ip = "8.8.8.8"
ipInfo(ip)
  .then(resolve, reject)
// Output:
// { ip: '8.8.8.8',
//   hostname: 'google-public-dns-a.google.com',
//   city: 'Mountain View',
//   region: 'California',
//   country: 'US',
//   loc: '37.3860,-122.0838',
//   org: 'AS15169 Google Inc.',
//   postal: '94040'
// }
```
