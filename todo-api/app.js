/**
 * App Server
 */
const app       = require('express')();
const router    = require('express').Router();
const JsonDb    = require('node-json-db');

const todoDb    = new JsonDb('dbs/todo');
const port      = process.env.PORT || 3100;

/**
 * Route Handlers. Kept in file for simplicity (I know this should be better
 * but w.e.)
 */
const todoHandler = (req, res) => {
  const todoData = todoDb.getData('/todo');
  res.status(200).json(todoData);
}

/**
 * Start server
 */
router.get('/api/todo', todoHandler);
app.use(router);
app.listen(port);
console.log(`Server live on: ${port}`);


