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
    <div class="col-md-3 col-sm-2 my-3">
            <div class="list bg-light shadow">
                <div class="p-3">
                    <div class="text-center onchange backgroundColor=this.color.value">
                        <p><b>${this.name}</b></p>
                        <i class="fa fa-trash action text-danger" title="delete list" onclick="app.listsController.destroy('${this.id}')"></i>
                    </div>
                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Task</label>
                          </div>
                      <label for=""></label>
                      <input type="text"
                        class="form-control" name="" id="" aria-described by="helpId" placeholder="Add Task...">
                      <small id="helpId" class="form-text text-muted"></small>
                    </div>
                </div>
            </div>`
  }
}
