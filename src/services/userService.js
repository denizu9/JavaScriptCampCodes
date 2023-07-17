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
                    if(!this.validateCustomer(user)){
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if(!this.validateEmployee(user)){
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong User Type", user))
                    break;
            }
        }
    }

    validateCustomer(user){
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Required field/fields missing : ${field}`,user))
            }
        }

        if(Number.isNaN(Number.parseInt(user.age))){
            this.errors.push(new DataError(`User's age must be a number : ${user.age} is not a number`))
        }
        return hasErrors
    }
    
    validateEmployee(user){
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.push(new DataError(`Required field/fields missing : ${field}`, user))
            }
        }

        if(Number.isNaN(Number.parseInt(user.age))){
            this.errors.push(new DataError(`User's age must be a number : ${user.age} is not a number`))
        }
        return hasErrors
    }

    add(user){
        switch(user.type) {
            case "customer" :
                this.customers.push(user)
                break
            case "employee" :
                this.employees.push(user)
                break
            default:
                this.errors.push(new DataError("This User can not be add because the type of user is wrong!", user))
                break     
        }
        this.loggerService.log(user)
    }

    list(){
       // return this.users
    }

    getById(id){
        //return this.users.find(u => u.id === id)
    }
}