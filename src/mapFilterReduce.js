let cart = [
    {id:1, productName:"Iphone", quantity:1, unitPrice:45000},
    {id:2, productName:"Bardak", quantity:6, unitPrice:120},
    {id:3, productName:"Kalem", quantity:1, unitPrice:200},
    {id:4, productName:"Şarj Cihazı", quantity:1, unitPrice:500},
    {id:5, productName:"Airpods", quantity:3, unitPrice:4500},
]

cart.map(product => console.log(product.productName))

console.log("<ul>")
cart.map(product => {
    console.log("<li>" +product.productName + " : " + product.quantity * product.unitPrice + "</li>")
})
console.log("/ul")


console.log("********************** filter function ***********************")

let quantityOver2 = cart.filter(product => product.quantity > 2 && product.unitPrice < 5000)

console.log(quantityOver2)


console.log("************************ reduce function ***********************")


let total = cart.reduce((acc, product) => acc + product.unitPrice * product.quantity, 0)

console.log(total)