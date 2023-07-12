function addToCartComputer(quantity, productName = "Computer") {
    console.log("Added to Cart : " + productName + " quantity of product : " + quantity)
}

addToCartComputer(2, "Acer Nitro AN45-50")


// Arrow Function

let sayHello = () => {
    console.log("Arrow Function says Helloooo")
}

sayHello()


// Define object and send it to addToCart Method

let product1 = {productName : "Armut", quantity : 5, unitPrice : 18.90}

function addToCart(product){
    console.log("Added to Cart : " + product.productName + " Quantity : " + product.quantity + "Unit Price : " + product.unitPrice)
}

addToCart(product1)


function addToCart2(products){
    console.log(products)
}

let products = [
    {productName : "Armut", quantity : 5, unitPrice : 18.90},
    {productName : "Elma", quantity : 4, unitPrice : 15},
    {productName : "Karpuz", quantity : 1, unitPrice : 56.90}
]

addToCart2(products)


console.log("****************** REST Usage *****************")

//REST
function addNumbers(...numbers){ //Rest
    
    let sum = 0
    for (let number = 0; number < numbers.length; number++) {
        sum += numbers[number]
    }
    console.log(sum)
}

addNumbers(20,30)


console.log("****************** SPREAD USAGE *******************")

let numbers = [30,100,30,56,230,678,345,123]

console.log(...numbers) // In here we use (...) for spread the numbers in Array and this is called SPREAD
console.log(Math.max(...numbers))


let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Giresun","Sinop"],
    ]
]

console.log(icAnadolu)
console.log(icAnadolu.name)
console.log(icAnadolu.population)

console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)
console.log(karadenizSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
    = {productName:"Armut",unitPrice:5,quantity:1})

console.log(newProductName)
console.log(newQuantity)
console.log(newUnitPrice)


