exports.index = function (req, res, next) {
  res.json({
    message: "successfully from users ...",
  });
};

exports.about = function (req, res, next) {
  res.json({
    message: "from about",
  });
};
