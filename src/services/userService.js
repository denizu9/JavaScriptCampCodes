import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService{

    constructor(loggerService){ 
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    this.customers.push(user)
                    break;
                case "employee":
                    this.employees.push(user)
                    break;
                default:
                    this.errors.push(new DataError("Wrong User Type", user))
                    break;
            }
        }
    }

    validateCustomer(user){
        let requiredFields = "id firstName lastName age city".split(" ")
    }

    add(user){
        //this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
       // return this.users
    }

    getById(id){
        //return this.users.find(u => u.id === id)
    }
}