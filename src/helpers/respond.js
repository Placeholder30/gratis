module.exports = function (res, statusCode = 200, payLoad) {
  const isError = statusCode >= 400;
  const status = isError ? "error" : "success";
  const payLoadKey = isError ? "message" : "data";

  return res.status(statusCode).json({
    status,
    [payLoadKey]: payLoad,
  });
};
