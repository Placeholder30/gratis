module.exports = function (res, payLoad, statusCode) {
  const isError = statusCode >= 400;
  const status = isError ? "error" : "success";
  const payLoadKey = isError ? "message" : "data";

  return res.status(statusCode).json({
    status,
    [payLoadKey]: payLoad,
  });
};
