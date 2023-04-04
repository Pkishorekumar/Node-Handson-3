const globalMiddleware = (req, res, next) => {
    console.log("This middleware is applicable to all routes.");
    // call next() to move on to the next middleware/route handler
    next();
  };
  
  // app.js
  const express = require("express");
  const app = express();
  
  // use the middleware function for all routes
  app.use(globalMiddleware);
  
  // example route handler
  app.get("/", (req, res) => {
    res.send("This is the homepage.");
  });
  app.get("/route1", (req, res) => {
    res.send("This is the Route 1.");
  });
  app.get("/route2", (req, res) => {
    res.send("This is the Route 2.");
  });
  
  // start server
  app.listen(1433, () => {
    console.log("Server started on 1433");
  });