import * as chai from "chai";

const { app, models } = global as any;
const { Hello } = models;
describe("Router", () => {
  before(async () => {
    await Hello.deleteMany();
  });

  describe("GET /", () => {
    it("should return Hello World", async () => {
      const res = await chai.request(app).get("/");
      res.status.should.equal(200);
      res.text.should.be.equal("Hello World");
    });
  });

  describe("POST /create", () => {
    it("should return error when title is not probided", async () => {
      const res = await chai.request(app).post("/create").send({});
      res.status.should.equal(400);
    });

    it("should return new Hello _id", async () => {
      const res = await chai.request(app).post("/create").send({ title: "title" });
      res.status.should.equal(200);
      res.body.should.include.keys(["_id"]);
    });
  });
});
