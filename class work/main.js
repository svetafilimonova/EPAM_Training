var items = document.getElementsByClassName("menu__item");
for(var i = 0; i < items.length; i++){
    items[i].style.cssText = "background-color: #35BAF6; \
    color: white; \
    padding: 10px; \ "
};

items[items.length - 1].style.border = "2px solid #29B6F5";
items[items.length - 1].style.borderTop = "2px solid #78B9F9";
items[items.length - 1].style.borderRadius = "0 0 10px 10px";



    document.querySelector("ul").style.cssText = "width: 100px; \
    position: absolute; \
    list-style: none; \
    top:-214px; \ ";


[].forEach.call(items, function (item) {
    item.addEventListener('mouseover', function(){
        this.style.backgroundColor = "#03A9F4";
    });

});

[].forEach.call(items, function (item) {
    item.addEventListener('mouseout', function(){
        this.style.backgroundColor = "#35BAF6";
    });

});



items[items.length - 1].addEventListener('mouseover', function(){
    this.style.boxShadow = "0px 12px 30px 3px #B3E4FC";
    this.style.backgroundColor = "#35BAF6";
});

items[items.length - 1].addEventListener('mouseout', function(){
    this.style.boxShadow = "none";
});

var menuList = document.getElementsByTagName("ul");


items[items.length - 1].addEventListener("click", function(){
    document.querySelector("ul").style.top = "-16px";
    // console.log(menuList.style);
});

items[items.length - 1].addEventListener("dblclick", function(){
    document.querySelector("ul").style.top = "-214px";
    console.log("cerf");
});

// items[items.length - 1].addEventListener("click", function(){
//     document.querySelector("ul").classList.toggle("hide");
//     console.log("h");
// });