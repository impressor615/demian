import * as chai from "chai";
import parseLanguage from "../../src/middlewares/parseLanguage";

describe("middleware parseLangauge", () => {
  const req = { acceptsLanguages: chai.spy(() => []) };
  const res = {};
  const next = chai.spy(() => ({}));
  it("should add landuage to request", () => {
    parseLanguage(req, res, next);
    req.should.includes.keys(["language"]);
    next.should.have.been.called();
  });
});
