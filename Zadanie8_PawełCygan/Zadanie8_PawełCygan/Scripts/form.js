//get language
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
var language = getCookie("Language")

function Validate() {
    ValidateName();
    ValidateSurName();

    var emialInput = document.getElementById('email-input');

    if(ValidateEmail(emialInput.value)) {
        emialInput.style.border = '1px solid #ced4da';
    } else {
        emialInput.style.border = '1px solid red';
    }
    ValidatePassword();
}

function ValidateName() {
    var nameInput = document.getElementById('name-input');
    if(nameInput.value != "") {
        nameInput.style.border = '1px solid #ced4da';
        return;
    }
    	nameInput.style.border = '1px solid red';
    }

function ValidateSurName() {
    var nameInput = document.getElementById('surname-input');
    if(nameInput.value != "") {
        nameInput.style.border = '1px solid #ced4da';
        return;
    }
    	nameInput.style.border = '1px solid red';
    }

function ValidateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2, }))$/;
    return re.test(email);
}

function ValidatePassword() {
    var pass1 = document.getElementById('password-input');
    var pass2 = document.getElementById('password-input2');

    if(pass1.value != pass2.value || pass1.value == "") {
        pass1.style.border = '1px solid red';
        pass2.style.border = '1px solid red';

        if (language == "pl") {
            document.getElementById('pass-error-info').innerHTML = 'Hasło musi zawierać przynajmniej 8 znaków, w tym 1 cyfrę, małą oraz dużą literę.';
        } else {
            document.getElementById('pass-error-info').innerHTML = 'Password must contains at least 8 characters including 1 number, lower case and upper case.';
        }
    } else {
    	if(pass1.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z!@#\$%\^\&*\)\(+=._-]{8, })$/)) {
            document.getElementById('pass-error-info').innerHTML = "";
            pass1.style.border = '1px solid #ced4da';
    		pass2.style.border = '1px solid #ced4da';
    	}
    }
}

    