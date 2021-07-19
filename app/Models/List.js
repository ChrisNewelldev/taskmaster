import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({name, color, id = generateId() }) {
    this.id = id
    this.name= name
    this.color = color
  }

  
  get Template() {
    return `
    <div class="col-md-3 my-3">
            <div class="list bg-light shadow">
                <div class="p-3">
                    <div class="text-center" style="background-color: ${this.color}">
                        <p><b>${this.name}</b></p>
                        <button onclick="app.ListsController.removeList()">x</button>
                        
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">${this.task}</label>
                            <button onclick="app.ListsController.removeTask()">x</button>
                          </div>
                      <label for=""></label>
                      <input type="text"
                        class="form-control" name="" id="" aria-described by="helpId" placeholder="Add Task...">
                      <small id="helpId" class="form-text text-muted"></small>
                      <button onclick="app.ListsController.addTask()">+</button>
                    </div>
                </div>
            </div>
            </div>
            `

  }
}
