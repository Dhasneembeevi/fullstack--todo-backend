const { Router } = require('express');
const route = Router();
const { getToDo, saveToDo, updateToDo, deleteToDo } = require('../controllers/todoController')


route.get("/", getToDo)
route.post("/save", saveToDo)
route.post("/update", updateToDo);
route.post("/delete", deleteToDo)

module.exports = route;