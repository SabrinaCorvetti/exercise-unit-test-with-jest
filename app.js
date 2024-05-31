// Declaramos una función con el nombre exacto "formEuroToDollar"


// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}



const  fromDollarToYen= function(valueInDollar) {
    // Convertimos el valor a dólares
    let montoenDollar = valueInDollar / 1.07 * 156.5;
    // Retornamos el valor en Yen
    return montoenDollar;
}



const  fromYenToPound= function(valueInYen) {
    // Convertimos el valor a dólares
    let montoenYen = valueInYen / 156.5 * 0.87;
    // Retornamos el valor en dólares
    return montoenYen;
}

module.exports = { sum, fromYenToPound, fromEuroToDollar, fromDollarToYen};
