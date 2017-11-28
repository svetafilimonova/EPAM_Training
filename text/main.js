var blueDiv = document.getElementById("blue");

blueDiv.style.cssText= "background-color: #A0DFD1; \
box-sizing: border-box; \
width: 396px; \
height: 200px;\
border: 1px solid #7AB6A8;\
position: relative; \ ";

var whiteDiv = document.querySelector(".white");

whiteDiv.style.cssText = " width: 370px; \
box-sizing: border-box; \
border: 1px solid #7AB6A8;\
color: #7AB6A8;\
padding: 10px;\
position: absolute;\
background-color: white;\
top: 5%;\
left: 3%; \ ";

var yellowDiv = document.querySelector(".header");
yellowDiv.style.cssText = "color: black;\
background: -moz-linear-gradient(top, #ffd600 0%, #fcc826 100%); \
background: -webkit-linear-gradient(top, #ffd600 0%,#fcc826 100%); \
padding: 10px;\
box-sizing: border-box; \
width: 368px;\
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


var windowWidthOld =  window.innerWidth;
var windowWidthRatio = 1;
var blueDivWidth =  blueDiv.offsetWidth;
var whiteDivWidth = whiteDiv.offsetWidth;
var yellowDivWidth = yellowDiv.offsetWidth;
var blueDivHeight = blueDiv.offsetHeight;
var whiteDivHeight = whiteDiv.offsetHeight;

console.log(whiteDivHeight + " white, " + blueDivHeight + " blue, ");

 window.onload = window.onresize = function () {

    var windowWidthNew =  window.innerWidth;

    windowWidthRatio = 1/(windowWidthOld / windowWidthNew);

    var newBlueDiv = blueDivWidth * windowWidthRatio;
    var newWhiteDiv = whiteDivWidth * windowWidthRatio;
    var newYellowWidth = yellowDivWidth * windowWidthRatio;
    var whiteDivHeightAfter = whiteDiv.offsetHeight;
    var heightRatio = whiteDivHeightAfter / whiteDivHeight;
    var newBlueDivHeight = blueDivHeight * heightRatio;

    console.log(whiteDivHeightAfter + " after, " + heightRatio + " ratio heeight: " + newBlueDivHeight );

        blueDiv.style.width = newBlueDiv + "px";
        whiteDiv.style.width = newWhiteDiv + "px";
        yellowDiv.style.width = newYellowWidth + "px";

        if (whiteDivHeightAfter >= blueDivHeight) {
            blueDiv.style.height = newBlueDivHeight + "px";
        }


};
