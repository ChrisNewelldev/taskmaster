import TasksController from "./Controllers/TasksController.js";

class App {
  tasksController = new TasksController();
}

window["app"] = new App();
