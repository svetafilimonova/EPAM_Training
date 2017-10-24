function copyObject(object, copyOfObject) {

    for (key in object) {
        copyOfObject[key] = object[key];
    }
    return console.log(copyOfObject);
}

var book = {
    author: "Лев Толстой",
    name: "Анна Каренина"
};

var newObj = {};

copyObject(book, newObj);

console.log(newObj);