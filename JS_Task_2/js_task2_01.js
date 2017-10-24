function defineType(val) {

    if (typeof val === 'string') {
        console.log("Это строка!")
    } else if (typeof val === 'number') {
        console.log("Это число!")
    } else {
        console.log("Ошибка!")
    }
}

defineType('ё');