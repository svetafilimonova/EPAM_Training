function hasSuchKey(string, object) {
    var key = string;
    for (key in object) {
        if (string === key) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }
}

var person = {
    name: 'Alex',
    surname: 'Petrov'
};

hasSuchKey("age", person);