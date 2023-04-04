const specificMiddleware = (req, res, next) => {
    console.log('This middleware is applicable to two specific routes.');
    // call next() to move on to the next middleware/route handler
    next();
  };
  
  // app.js
  const express = require('express');
  const app = express();
  
  // example route handlers
  app.get('/route1', specificMiddleware, (req, res) => {
    res.send('This is the first specific route.');
  });
  
  app.post('/route2', specificMiddleware, (req, res) => {
    res.send('This is the second specific route.');
  });
  
  // start server
  app.listen(1433, () => {
    console.log('Server started on 1433.');
  });