function hasValue(string, object) {

    var key = string;

    for (key in object) {
        if (string in object) {
            return console.log(object);
        } else {
            object[string] = "new";
            return console.log(object);
        }
    }
}

var book = {
    author: "Лев Толстой",
    name: "Анна Каренина"
};


hasValue("genre", book);