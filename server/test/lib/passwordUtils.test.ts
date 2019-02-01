import { generatePassword, verifyPassword } from "@/lib/passwordUtils";

describe("generatePassword", () => {
  const user: { password?: string; salt?: string } = {};
  const inputPassword = "password";
  describe("generatePassword", () => {
    it("should return salt and encrypted password", async () => {
      const { password, salt }: { password: any; salt: string; } = await generatePassword(inputPassword);
      password.should.not.be.equal("");
      salt.should.not.be.equal("");
      user.password = password;
      user.salt = salt;
    });
  });

  describe("verifyPassword", () => {
    it("should return valid when correct userInf is provided", async () => {
      const result = await verifyPassword(inputPassword, user);
      result.should.be.equal(true);
    });

    it("should return false when inputPassword is not valid", async () => {
      const result = await verifyPassword("fakePassword", user);
      result.should.be.equal(false);
    });
  });
});
