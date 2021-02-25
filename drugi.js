//dugme 
var mybutton = document.getElementById("myBtn");

// pojavljivanje dugmeta prilikom pomerenih 20px na dole
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// klik na dugme i povratak na gore
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}