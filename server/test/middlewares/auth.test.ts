import * as chai from "chai";

import { issueToken } from "@/lib/tokenUtils";
import auth from "@/middlewares/auth";

const {
  app,
  errors,
} = global as any;
describe("middleware auth", () => {
  let userToken;
  const payload = { name: "user", country: "korea" };
  const secret = app.get("jwt-secret");
  const next = chai.spy(() => ({}));
  before(async () => {
    const token = await issueToken(payload, secret);
    token.should.not.equal("");
    userToken = token;
  });

  it("should return error when token is not provided", async () => {
    const req = { app, headers: {}, query: {} };
    const json = chai.spy(() => (
      { type: "error", message: errors.not_authorized }
    ));
    const status = chai.spy(() => ({ json }));
    const res = { status, json };
    const errResult = await auth(req, res, next);
    errResult.should.include.keys(["type", "message"]);
    errResult.should.property("type", "error");
    errResult.should.property("message", errors.not_authorized);
  });

  it("should return error when token is not valid", async () => {
    const req = { app, headers: { "x-access-token": "fake" }, query: {} };
    const json = chai.spy(() => (
      { type: "error", message: errors.not_authorized }
    ));
    const status = chai.spy(() => ({ json }));
    const res = { status, json };
    const errResult = await auth(req, res, next);
    errResult.should.include.keys(["type", "message"]);
    errResult.should.property("type", "error");
    errResult.should.property("message", errors.not_authorized);
  });

  it("should return undefined and next should be called when token is valid", async () => {
    const req = { app, headers: { "x-access-token": userToken }, query: {} };
    const json = chai.spy(() => (
      { type: "error", message: errors.not_authorized }
    ));
    const status = chai.spy(() => ({ json }));
    const res = { status, json };
    const result = await auth(req, res, next);
    chai.should().not.exist(result);
    chai.expect(next).to.have.been.first.called();
  });
});
