import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({ crust, size, name, id = generateId() }) {
    this.id = id
    this.crust = crust
    this.size = size
    this.name = name
  }

  get Template() {
    return `
    <div class="col-4 mt-3">
      <div class="bg-light rounded shadow-light">
        <div class="d-flex justify-content-around align-items-center rounded-top bg-pizza text-light text-center p-3">
            <h3>${this.name.toUpperCase()}</h3>
            <i class="fa fa-trash action text-danger" title="delete pizza" onclick="app.pizzasController.destroy('${this.id}')"></i>
        </div>
        <div class="p-2">
            <p><b>Pie Style: </b></p>
            <ul class="bg-gray lighten-40 p-2 pl-4">
                <li>${this.crust}</li>
                <li class="${this.size == 'MEGA' ? 'text-danger' : ''}">${this.size}</li>
            </ul>
        </div>
        <div class="p-2 ">
            <p><b>Toppings: </b></p>
            <ul class="bg-gray lighten-40 p-2 pl-4">
                ${this.MyToppings}
            </ul>
        </div>
        <form onsubmit="app.pizzasController.addTopping('${this.id}')"> 
          <input type="text" name="topping" placeholder="Topping..." required>
          <button type="submit" class="btn btn-outline-success">+</button>
        </form>
      </div>
    </div>`
  }

  