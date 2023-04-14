var element = document.getElementById("ecosystem");
var bleh = 0;
element.addEventListener("click", function(e) {
var element2 = document.getElementById("window2");

switch(+bleh){
    case 1:
        element2.style.opacity = "0";
        bleh = 0
        break;
    default:
        element2.style.opacity = "1";
        bleh = 1;
        break;
    }
}, false);

