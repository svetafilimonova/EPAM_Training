function searchInProto(obj, key) {
    var objProto = Object.getPrototypeOf(obj);

    if (key in objProto) {

        console.log("Такое свойство есть в прототипе этого объекта")
    } else {
        console.log("Такого свойства нет в прототипе этого объекта")
    }
}


var object = {
    a: 1,
    b: 2
}
var object2 = Object.create(object);
object2.с = 3;

searchInProto(object2, "b");


function createWithoutProto(obj) {
    obj = Object.create(null);
    return obj;

}

var myObj;

console.log(createWithoutProto(myObj));