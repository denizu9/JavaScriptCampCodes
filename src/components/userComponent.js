import { BaseLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User Component Loaded!")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1, "Deniz", "Ural","İstanbul")

userService.add(user1)
console.log(userService.getAllUsers())
console.log(userService.getById(user1.id))

