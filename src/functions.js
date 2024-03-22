function addToCart(quantity ,productName = "Apple MacBook Air") {
    console.log("Sepete Eklendi, ürün : " + productName + " " + "Adet  : " + quantity)
}

addToCart()

addToCart("Acer Nitro 5 AN515-45", 1);

addToCart("Apple MacBook Pro 2024 14", 3)

addToCart(10)


let sayHello = () =>{
    console.log("Hello")
}

sayHello()


let sayHello2 = function (params){
    console.log("Hello 2")
}

sayHello2()

// Obje Tanımı

let product1 = {productName : "Elma", unitPrice : 10, quantity : 5}

function addToCart2(product){
    console.log("Ürün : " + product.productName + " " + "Fiyat : " + product.unitPrice + " " + "Quantity : " + product.quantity)
}

addToCart2(product1)


let products = [
    {productName : "Acer Nitro 5 AN515-45", unitPrice : 22500, quantity : 1},
    {productName : "Monster Abra A7", unitPrice : 19850, quantity : 1},
    {productName : "Macbook Air M2 8 GB", unitPrice : 25999, quantity : 1}
]

function addToCart4(products){
    console.log(products)
}

addToCart4(products)

// REST

function add(...numbers){ // Burada Array'in içine alıyor numbers'ları.
    let number = 0;
    for (let i = 0; i < numbers.length; i++) {
        number += numbers[i]
    }
    console.log(number)
}

add(20, 30)
add(78, 89, 52)


// SPREAD -> 

let numbers = [30,789,422,31,2,78]

console.log("Biggest number is : " + Math.max(...numbers)) // Burada parçalayıp buluyor.



// Destructuring 

let [akdeniz, marmara, karadeniz, [akdenizSehirleri]] = [
    {name : "Akdeniz", population : "10M"},
    {name : "Marmara", population : "35M"},
    {name : "Karadeniz", population : "8M"},
    [
        ["Antalya","Alanya"],
        ["İstanbul","Bursa"],
        ["Giresun","Samsun"]

    ]
] 

console.log(akdeniz.name)
console.log(akdeniz.population)
console.log(akdenizSehirleri)


// Obje Versiyonu -> Destructuring


let newProductName, newUnitPrice, newQuantity 
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } = {productName :"Elma", unitPrice : 6, quantity : 2})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)