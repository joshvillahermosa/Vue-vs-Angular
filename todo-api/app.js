/**
 * App Server
 */
const app       = require('express')();
const router    = require('express').Router();
const JsonDb    = require('node-json-db');

const todoDb    = new JsonDb('dbs/todo');
const port      = process.env.PORT || 3100;

/**
 * Allows CORS atm.
 */
function allowCors (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
};

/**
 * Route Handlers. Kept in file for simplicity (I know this should be better
 * but w.e.)
 */
function todoHandler (req, res) {
  const todoData = todoDb.getData('/todo');
  res.status(200).json(todoData);
};


/**
 * Start server
 */
app.use(allowCors);
router.get('/api/todo', todoHandler);
app.use(router);
app.listen(port);
console.log(`Server live on: ${port}`);


