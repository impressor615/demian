import * as chai from "chai";
import pagination from "../../src/middlewares/pagination";

describe("middleware pagination", () => {
  const res = {};
  const next = chai.spy(() => ({}));

  it("should return default count, page, skip query", () => {
    const req = { method: "GET", query: {} };
    pagination(req, res, next);
    req.query.should.includes.keys(["count", "page", "skip"]);
    next.should.have.been.called();
  });

  it("should return empty query when method is not GET", () => {
    const req = { method: "POST", query: {} };
    pagination(req, res, next);
    // tslint:disable-next-line
    req.query.should.be.empty;
    next.should.have.been.called();
  });

  it("should return current query if page and count is provided", () => {
    const req = { method: "GET", query: { count: 20, page: 5 } };
    pagination(req, res, next);
    req.query.should.includes.keys(["count", "page", "skip"]);
    req.query.page.should.equal(req.query.page);
    req.query.count.should.equal(req.query.count);

    next.should.have.been.called();
  });
});
