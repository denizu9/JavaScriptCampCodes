console.log("I'm starting to learn Javascript")

let dolarPriceYesterday = 32.02;
let dolarPriceToday = 32.15;

console.log(dolarPriceYesterday)

const euroPriceYesterday = 35;

console.log(euroPriceYesterday)


let houseCredits = ["Mutlu Yaşlı Kredisi", "Huzurevi Kredisi", "Çiftçi Konut Kredisi"]

console.log("<ul>")
for (let credit = 0; credit < houseCredits.length; credit++) {
    console.log("<li>" + houseCredits[credit] + "</li>")
}

console.log("</ul>")