// we declare the function with the exact name "fromEuroToDollar"
//const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    //let valueInDollar = valueInEuro * 1.2;
    //return the doller value
   // return valueInDollar;
//}


// esta es mi función que suma dos números
//const sum = (a,b) => {
    //return a + b
//}

// solo un registro en consola para nosotros.
//console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
//module.exports = { sum, fromEuroToDollar };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


let fromEuroToDollar = function(dollars){
    return dollars * oneEuroIs.USD;
}
let fromDollarToYen = function(yens){
    return yens * oneEuroIs.JPY;
}
let fromYenToPound = function(pound){
    return pound * oneEuroIs.GBP;
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };


