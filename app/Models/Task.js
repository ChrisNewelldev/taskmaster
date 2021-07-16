import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ crust, size, name, id = generateId() }) {
    this.id = id
    this.crust = crust
    this.size = size
    this.name = name
  }