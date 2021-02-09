function getCounter() {
    let counter = 0;
    return function () {
        return counter++;
    }
}

module.exports = {
    getCounter
}