const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
//-------------------------------------
// ye error handler h //postman mein error dikhaye jb galat object id jaye
//this is a middleware
//stack trace use kiya h ....sirf tb hi jb application production mein hai
//The stack trace is useful while debugging code as it shows the exact point that has caused an error.
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
