var reload = function () {
    "use strict";
    window.location.reload();
};

var newreload = document.getElementById("generate");
newreload.addEventListener("click", reload);

var paddingslider = document.getElementById("pad");
var colorselect = document.getElementById("bcolor");
var bnessslider = document.getElementById("brightness");
var cntrstslider = document.getElementById("contrast");
var satslider = document.getElementById("saturation");
var showvalue = function () {
    "use strict";
    var temp, namevalue;
    temp = this.value;
    namevalue = this.name;
    if (namevalue === "padding") {
        temp = temp + "px";
    }
    if (namevalue === "bness" || namevalue === "cntrst" || namevalue === "sat") {
        temp = temp + "%";
    }
    namevalue = "--" + namevalue;
    document.documentElement.style.setProperty(namevalue, temp);
};

paddingslider.addEventListener("change", showvalue);
paddingslider.addEventListener("mousemove", showvalue);
colorselect.addEventListener("change", showvalue);
colorselect.addEventListener("mousemove", showvalue);
bnessslider.addEventListener("change", showvalue);
bnessslider.addEventListener("mousemove", showvalue);
cntrstslider.addEventListener("change", showvalue);
cntrstslider.addEventListener("mousemove", showvalue);
satslider.addEventListener("change", showvalue);
satslider.addEventListener("mousemove", showvalue);

var lambda = function () {
    "use strict";
    var url = document.getElementById("imgurl").value;
    document.getElementById("masterimg").src = url;
};

document.getElementById("submit").addEventListener("click", lambda);