const error500 = (err, req, res, next) => {
  res
    .status(err.statusCode || 500)
    .json({ message: err.message || "something LONG" });
}

export default error500