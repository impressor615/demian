import * as jwt from "jsonwebtoken";

export const issueToken = async (
  payload,
  secret,
  options = {
    expiresIn: "7d",
    subject: "userInfo",
  },
) => (
  new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      secret,
      options,
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      },
    );
  })
);

export const verifyToken = async (token, secret) => (
  new Promise((resolve, reject) => (
    jwt.verify(token, secret, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    })
  ))
);
