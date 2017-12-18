function loadCoord() {

    const google_url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    const key = "&key=AIzaSyAdrZuFXlo3OoE2XXEH5d0smdoPhE6EKXk"
    const output = document.querySelector('.response');
    const country = document.querySelector('#country');
    const city = document.querySelector('#city');
    const street = document.querySelector('#street');
    const house = document.querySelector('#house');
    const url = `${google_url }${country.value}${city.value}${street.value}${house.value}${key}`;

    const xhr = new XMLHttpRequest;
    xhr.open('GET', url, true);
    xhr.send();
    xhr.addEventListener('load', function () {

        if (JSON.parse(xhr.responseText).status === "OK") {
            const lat = JSON.parse(xhr.responseText).results[0].geometry.location.lat;
            const long = JSON.parse(xhr.responseText).results[0].geometry.location.lng;
            const strExmp = `Широта: ${lat}, Долгота: ${long}`;
            output.innerHTML = strExmp;
        } else if (JSON.parse(xhr.responseText).status === "ZERO_RESULTS") {
            output.innerHTML = "Вы ввели несуществующий адрес";
        } else if (JSON.parse(xhr.responseText).status === "INVALID_REQUEST") {
            output.innerHTML = "Введите адрес";
        } else {
            output.innerHTML = "Произошла ошибка";
        }

        if(!(JSON.parse(xhr.responseText).status === "OK")){
            output.style.color = "red";
        } else {
            output.style.color = "darkcyan";
        }

    });

    country.value = "";
    city.value = "";
    street.value = "";
    house.value = "";
};


const button = document.querySelector('.btn');
button.addEventListener('click', function (e) {
    e.preventDefault;
    loadCoord();
});


/********************************************Вариант с промисом ***************************************/


// const google_url = "https://maps.googleapis.com/maps/api/geocode/json?address=";
// const key = "&key=AIzaSyAdrZuFXlo3OoE2XXEH5d0smdoPhE6EKXk"
// const output = document.querySelector('.response');
// const country = document.querySelector('#country');
// const city = document.querySelector('#city');
// const street = document.querySelector('#street');
// const house = document.querySelector('#house');


// function loadCoord(url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest;
//         xhr.open('GET', url, true);
//         xhr.send();
//         xhr.addEventListener('load', function () {
//             if (xhr.status === 200) {
//                 resolve(JSON.parse(xhr.responseText));
//             } else {
//                 console.log(xhr.response);
//                 console.log(xhr.status);
//                 reject(JSON.parse(xhr.responseText));
//               }
//         });
        

//         // xhr.addEventListener('error', function () {
//         //     // reject(JSON.parse(xhr.responseText));
//         //     console.log(JSON.parse(xhr.responseText));
//         //     reject(xhr.status);
//         // })


//     });

// };


// const button = document.querySelector('.btn');
// button.addEventListener('click', function (e) {
//     e.preventDefault;
//     const url = `${google_url }${country.value}${city.value}${street.value}${house.value}${key}`;
//     loadCoord(url)
//         .then((response) => {

//             if (response.status === "OK") {
//                 const lat = response.results[0].geometry.location.lat;
//                 const long = response.results[0].geometry.location.lng;
//                 const strExmp = `Широта: ${lat}, Долгота: ${long}`;
//                 output.innerHTML = strExmp;
//             }  else if (response.status === "ZERO_RESULTS") {
//                 output.innerHTML = "Вы ввели несуществующий адрес";
//             }



//             country.value = "";
//             city.value = "";
//             street.value = "";
//             house.value = "";

//         })
//         .catch((response) => {
//              if (response.status === "INVALID_REQUEST") {
//                 output.innerHTML = "Введите адрес";
//             } else {
//                 output.innerHTML = "Произошла ошибка";
//             }

           
//         });
// });