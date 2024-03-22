let cart = [
    {id : 1, productName : "Telefon", quantity : 1, unitPrice : 47000},
    {id : 2, productName : "Bilgisayar", quantity : 1, unitPrice : 20000},
    {id : 3, productName : "Bardak", quantity : 6, unitPrice : 60},
    {id : 4, productName : "Kitap", quantity : 1, unitPrice : 120},
    {id : 5, productName : "Hızlı Şarj Cihazı", quantity : 2, unitPrice : 800},
    {id : 6, productName : "Kahve Makinası", quantity : 1, unitPrice : 18950}
]


// map :

cart.map(product => console.log(product.productName))

console.log("<ul>")
cart.map(product => {
    console.log("<li>" +product.productName + " : " + product.quantity * product.unitPrice + "TL" + "</li>")
})
console.log("</ul>")


// filter :

let quantityOver2 = cart.filter(product => product.quantity >= 2)

console.log(quantityOver2)

// reduce :

let total = cart.reduce((acc, product) => acc + (product.unitPrice * product.quantity), 0)

console.log(total)