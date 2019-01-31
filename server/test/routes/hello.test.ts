import * as chai from "chai";

const { app } = global as any;
describe("Router", () => {
  it("should return Hello World", async () => {
    const res = await chai.request(app).get("/");
    res.status.should.equal(200);
    res.text.should.be.equal("Hello World");
  });
});
