import { ProxyState } from "../AppState.js";
import Pizza from "../Models/Pizza.js";
import Topping from "../Models/Topping.js";

export function saveState() {
  localStorage.setItem('MarksPizza', JSON.stringify({
    pizzas: ProxyState.pizzas,
    toppings: ProxyState.toppings
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('MarksPizza'))
  console.log(data)
  if (data != null) {
    ProxyState.pizzas = data.pizzas.map(p => new Pizza(p))
    ProxyState.toppings = data.toppings.map(t => new Topping(t))
  }

}