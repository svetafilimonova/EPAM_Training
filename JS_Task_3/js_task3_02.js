function showObjProp(object) {
    for (key in object) {
        console.log(key + " : " + object[key]);
    }
};

var person = {
    name: 'Alex',
    surname: 'Petrov'
};

showObjProp(person);