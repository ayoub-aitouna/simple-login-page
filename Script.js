function validcal() {
    var x1 = document.getElementById("x1");
    var x2 = document.getElementById("x2");
    var error_box = document.getElementById("error");
    var span = document.getElementById("span");

    var n1 = parseFloat(x1.value);
    var n2 = parseFloat(x2.value);

    if (isNaN(n1)) {
        error_box.innerText = "Please Write numbers not carachters"
        x1.style.borderColor = "red"
        return;

    }
    if (isNaN(n2)) {
        error_box.innerText = "Please Write numbers not carachters"
        x2.style.borderColor = "red"
        return;
    }
    if (x1.value.length == 0) {

        x1.style.borderColor = "red"

    }
    if (x2.value.length == 0) {

        x2.style.borderColor = "red"

    }
    error_box.innerText = ""
    x2.style.borderColor = "#00EEFF"
    x1.style.borderColor = "#00EEFF"
    var y = n1 + n2;
    span.innerText = y

}

function ChangeEye(EyeHolder) {

    //var EyeHolder = document.getElementById("eye");
    if (EyeHolder.innerHTML == '<i class="fas fa-eye"></i>') {
        EyeHolder.innerHTML = '<i class="fas fa-eye-slash"></i>';
        HidePass();
    } else {
        EyeHolder.innerHTML = '<i class="fas fa-eye"></i>';
        ShowPass();
    }
    //alert("sd")
}

function HidePass() {
    var pass = document.getElementById("x2");
    pass.type = 'password'
}

function ShowPass() {
    var pass = document.getElementById("x2");
    pass.type = 'text'
}


function checkPass(PassHolder) {
    var div = document.getElementById("pass");
    if (PassHolder.value.length < 8) {
        div.style.borderColor = "red"
    } else {
        div.style.borderColor = "#00EEFF"

    }
}
//#### Sample Regexs ####
//[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+

function CheckEmail(EmailHolder) {
    const rgx = /[a-zA-Z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-Z0-9-.]+/
        //const rgx = /a/

    var div = document.getElementById("Email");
    var email = EmailHolder.value;
    //  alert(email)
    if (!rgx.test(email)) {
        div.style.borderColor = "red"
    } else {
        div.style.borderColor = "#00EEFF"
    }

}

function log() {
    var error = document.getElementById("error");
    error.innerText = "Email/password uncorrect"
}