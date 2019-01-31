const DEFAULT_COUNT = 20;
const DEFAULT_PAGE = 1;

export default (req, res, next) => {
  const { method } = req;
  if (method !== "GET") {
    next();
    return;
  }
  const { query } = req;
  const { count, page } = query;
  query.count = count || DEFAULT_COUNT;
  query.page = page || DEFAULT_PAGE;
  query.skip = query.count * (query.page - 1);

  next();
};
