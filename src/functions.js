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
