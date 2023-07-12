import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js" // Carefull en of the userService.js. If it doesn't have js extension, add it.

console.log("User component loaded!")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Deniz", "Ural", "İstanbul")
let user2 = new User(2,"İrem", "Kadıoğlu","Giresun")

userService.add(user1)
userService.add(user2)

console.log(userService.list())

console.log(userService.getById(2))