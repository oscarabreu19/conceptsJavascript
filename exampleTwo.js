function suma(a) {
    return function calculo(b) {
        return a + b;
    }
}

module.exports = {
    suma
}