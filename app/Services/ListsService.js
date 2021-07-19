//this is the color changer function...

//function changeColor(event) {
  //var red = document.getElementById(red);
  //var green = document.getElementById(green);
  //var blue = document.getElementById(blue);

  //if (event.target.value == red) {
    //red.style.color = "red";
  //} else if (event.target.value == green) {
    //green.style.color = "green";
  //} else if (event.target.value == blue) {
    //blue.style.color = "blue";
  //} else {
    //alert("There was an error!");
  //}}

  import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {

  createList(rawList) {
    ProxyState.lists = [...ProxyState.lists, new list(rawList)]
  }

  addTask(rawTask) {
    ProxyState.task = [...ProxyState.task, new Task(rawTask)]
  }

  destroy(id) {
    ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id)
  }
  removeTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
  }
}

export const listsService = new ListsService()