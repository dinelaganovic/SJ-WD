function sendemail() {
    window.location = "mailto:dinelaganovic99@gmail.com";
}

function prvimpr(tekst) {
    tekst.value = tekst.value.toString();
    if (tekst.value.match(/^[A-Z]{1}[a-z]{3,}\s[A-Z]{1}[a-z]{3,}$/) === null) {
        document.getElementById('namerror1').innerHTML = "Postoji greška!";
        return false;
    }
    document.getElementById('namerror1').innerHTML = "";
    return true;
}

function mail(tekst) {
    tekst.value = tekst.value.toString();
    if (tekst.value.match(/^[a-zA-Z_0-9]{5}[a-zA-Z]{1}@[A-Z]{1}[a-zA-Z.]{1,}.[A-Z]{1}[a-z]{1,}$/) === null) {
        document.getElementById('namerror2').innerHTML = "Postoji greška!";
        return false;
    }
    document.getElementById('namerror2').innerHTML = "";
    return true;
}

function por(tekst) {
    tekst.value = tekst.value.toString();
    if (tekst.value.match(/^\D{0,}$/) === null) {
        document.getElementById('namerror3').innerHTML = "Postoji greška!";
        return false;
    }
    document.getElementById('namerror3').innerHTML = "";
    return true;
}

function validateform() {
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var textarea = document.myform.textarea.value;
    if (name == "" || email == "" || textarea == "") {
        document.getElementById('namerror').innerHTML = "Polja oznacena sa * ne mogu biti prazna!";
        return false;
    }
    alert(" Hvala Vam što ste nas kontaktirali!");
    return true;
}


function validateform1() {
    var name = document.myform.name.value;
    var email = document.myform.email.value;
    var textarea = document.myform.textarea.value;
    if (name == "" || email == "" || textarea == "") {
        document.getElementById('namerror').innerHTML = "Fields marked with * cannot be blank!";
        return false;
    }
    alert("Thank you for contacting us!");
    return true;
}

function prvimpr1(tekst) {
    tekst.value = tekst.value.toString();
    if (tekst.value.match(/^[A-Z]{1}[a-z]{3,}\s[A-Z]{1}[a-z]{3,}$/) === null) {
        document.getElementById('namerror1').innerHTML = "Error!";
        return false;
    }
    document.getElementById('namerror1').innerHTML = "";
    return true;
}

function mail1(tekst) {
    tekst.value = tekst.value.toString();
    if (tekst.value.match(/^[a-zA-Z_0-9]{5}[a-zA-Z]{1}@[A-Z]{1}[a-zA-Z.]{1,}.[A-Z]{1}[a-z]{1,}$/) === null) {
        document.getElementById('namerror2').innerHTML = "Error!";
        return false;
    }
    document.getElementById('namerror2').innerHTML = "";
    return true;
}

function por1(tekst) {
    tekst.value = tekst.value.toString();
    if (tekst.value.match(/^\D{0,}$/) === null) {
        document.getElementById('namerror3').innerHTML = "Error!";
        return false;
    }
    document.getElementById('namerror3').innerHTML = "";
    return true;
}