import { ERRORS } from "@/constants";
import sendError from "@/lib/sendError";
import { verifyToken } from "@/lib/tokenUtils";

export default async (req, res, next) => {
  const token = req.headers["x-access-token"] || req.query.token;
  if (!token) {
    return sendError({
      res,
      language: req.language,
      error: ERRORS.not_authorized,
    });
  }

  try {
    const secret = req.app.get("jwt-secret");
    const user = await verifyToken(token, secret);
    req.user = user;
    next();
  } catch (err) {
    return sendError({
      res,
      language: req.language,
      error: ERRORS.not_authorized,
    });
  }
};
