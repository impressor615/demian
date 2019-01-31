import { ERRORS } from "../constants";

export default ({
  res,
  language,
  error = ERRORS.route_invalid_data,
  status = 400,
}) => res.status(status).json({ type: "error", message: error[language] || error.en });
