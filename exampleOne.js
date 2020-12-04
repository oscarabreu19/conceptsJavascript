// Outer Function 
function doSomething() {
    const name = 'Oscar Galindez';

    // Inner Function
    function showSomething() {
        console.log(name);
    }

    // Llamada a la innerFunction
    showSomething();
}

module.exports = {
    doSomething
}