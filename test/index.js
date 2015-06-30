var ipInfo = require("../index.js")
var should = require("chai").should();
describe("test ips", function() {
  it("should return true", function(done) {
    ipInfo("8.8.8.8")
      .then(function(d) {
        console.log(d);
        d.should.be.an.object;
        done()
      }, done)
  });
})
