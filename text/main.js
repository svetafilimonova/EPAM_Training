var blueDiv = document.getElementById("blue");

blueDiv.style.cssText= "background-color: #A0DFD1; \
width: 400px; \
height: 200px;\
border: 1px solid #7AB6A8;\
position: relative; \ " ;

var whiteDiv = document.querySelector(".white");

whiteDiv.style.cssText = " width: 370px; \
height: 170px; \
border: 1px solid #7AB6A8;\
color: #7AB6A8;\
padding: 5px;\
position: absolute;\
background-color: white;\
top: 18px;\
left: 17px; \ ";

var yellowDiv = document.querySelector(".header");
yellowDiv.style.cssText = "color: black;\
background: -moz-linear-gradient(top, #ffd600 0%, #fcc826 100%); \
background: -webkit-linear-gradient(top, #ffd600 0%,#fcc826 100%); \
padding: 10px;\
width: 360px;\
position: absolute;\
top: 0;\
left: 0;\
font-size: 17px;\ ";


var yellowTrngl = document.createElement("div");

yellowTrngl.style.cssText = "position: absolute;\
 width: 0; \
 height: 0; \
 border-left: 15px solid transparent;\
 border-right: 15px solid transparent;\
 border-top: 12px solid #FFC200;\
 top: 39px;\
 left: 8px; \ ";

 yellowDiv.appendChild(yellowTrngl);

 var text = document.querySelector(".white p");
 text.style.marginTop = "50px";


var windowWidthOld = window.innerWidth;
console.log("before " + windowWidthOld);

 window.onload = window.onresize = function () {

    var blueDivWidth = blueDiv.offsetWidth;
    
    console.log(blueDivWidth);

    var windowWidthNew = window.innerWidth;

    var windowWidthRatio = windowWidthOld / windowWidthNew;

    console.log("after "+ windowWidthNew);
    console.log("ratio "+ windowWidthRatio);

    var newBlueDiv = blueDivWidth - windowWidthRatio;

    console.log("new "+ newBlueDiv);

        blueDiv.style.width = newBlueDiv + "px";
    

  



    
   

    // if (left.offsetHeight < window_height) {
    //     left.style.height = '100%';    
    //     left_height=left.offsetHeight;
    //     console.log(left_height);
    //     left.style.height = left_height + "px";

    // } else {}
};
