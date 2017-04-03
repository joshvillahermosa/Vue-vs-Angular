/**
 * App Server
 */
const app         = require('express')();
const router      = require('express').Router();
const JsonDb      = require('node-json-db');
const bodyParser  = require('body-parser');
const todoDb      = new JsonDb('dbs/todo', true, true);
const port        = process.env.PORT || 3100;

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

function addTodo(req, res) {
  let todo = {
    id: new Date().getTime(),
    todo: req.body.todo,
    completed: false
  }
  console.log(`Adding new item: ${todo.todo}`);
  try {
    todoDb.push('/todo[]', todo, true)
    res.status(200).json({success: true, todo: todo});
  } catch(e) {
    res.status(500).json({success: false, error: e});
  }

}


/**
 * Start server
 */
app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/api/todo', todoHandler);
router.post('/api/todo', addTodo);

app.use(router);
app.listen(port);
console.log(`Server live on: ${port}`);


