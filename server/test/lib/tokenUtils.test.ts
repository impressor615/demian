import { issueToken, verifyToken } from "@/lib/tokenUtils";

describe("tokenUtils", () => {
  let userToken = null;
  const payload = { name: "user", country: "korea" };
  const secret = "secret";
  describe("issueToken", () => {
    it("should return token", async () => {
      const token = await issueToken(payload, secret);
      userToken = token;
      token.should.not.equal("");
    });
  });

  describe("verifyToken", () => {
    it("should return userInfo when token is valid", async () => {
      const result = await verifyToken(userToken, secret);
      result.should.include.keys(["name", "country", "iat", "exp", "sub"]);
    });

    it("should return error when token is invalid", async () => {
      try {
        await verifyToken("fakeToken", secret);
      } catch (error) {
        error.message.should.equal("jwt malformed");
      }
    });
  });
});
