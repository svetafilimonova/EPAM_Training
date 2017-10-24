function setRandom(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(setRandom(10, 20));