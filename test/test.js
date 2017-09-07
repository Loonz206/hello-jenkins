var request = require("supertest");
var app = require("../app.js");

describe("GET /", function () {
    it("respond with hello lenny", function (done){
        request(app).get("/").expect("hello lenny", done);
    });
});