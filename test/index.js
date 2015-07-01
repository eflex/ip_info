var ipInfo = require("../index.js")
var should = require("chai").should();

// chai.should;
describe("test ips", function() {
  it("should have country key", function(done) {
    ipInfo("8.8.8.8")
      .then(function(data) {
        try {
          console.log(data);
          data.should.contain.keys("country");
          done()
        } catch (err) {
          done(err)
        }
      }, done)
  });
});
