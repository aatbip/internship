const AppError = require("../AppError");

const errorHandler = (error, req, res, next) => {
  if (error.name === "ValidationError") {
    return res.status(400).json({
      type: "Validation Error",
      details: error.message,
    });
  }

  if (error.name === "ReferenceError") {
    return res.status(400).json({
      type: "Reference error",
      details: error.message,
    });
  }

  if (error.name === "MongoServerError") {
    return res.status(400).json({
      type: "MongoDB server error",
      details: error.message,
    });
  }

  if (error.name === "TypeError") {
    return res.status(400).json({
      type: "Type Error",
      details: error.message,
    });
  }

  if (error instanceof AppError) {
    return res.status(400).json({
      code: error.statusCode,
      detials: error.message,
    });
  }

  return res.status(400).json(error.message);
};

module.exports = errorHandler;
