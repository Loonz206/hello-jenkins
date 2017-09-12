var request = require("supertest");
var app = require("../app.js");

describe("GET /", function () {
    it("respond with hello darin", function (done){
        request(app).get("/").expect("hello darin", done);
    });
});

