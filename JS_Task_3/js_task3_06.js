function cloneDeep(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    var temp = {};
    for (var k in obj) {
        temp[k] = cloneDeep(obj[k]);
    }
    return temp;
}



obj = {
    a: 1,
    b: {
        c: 0
    },
    e: {
        f: {
            g: 1
        }
    }
};

var clonedObj = {};
clonedObj = cloneDeep(obj)
console.log(clonedObj.e);
console.log(obj.b === clonedObj.b);