const email = document.querySelector('.usermail');
const phone = document.querySelector('.phonenum');
const password = document.querySelector('.mypass');
const confirmPass = document.querySelector('.passconfirm');
const errorMessage = document.querySelector('.error-container');

const inputs = [email, phone, password, confirmPass];

inputs.forEach((input) => {
    input.addEventListener('focusin', () =>{
        errorMessage.textContent = '';
        input.classList.remove('error');
        if (input == password || input == confirmPass) {
            password.classList.remove('error');
            confirmPass.classList.remove('error');
        }
    })
})

const submit = (e) => {
    e.preventDefault();
    if (password.value !== confirmPass.value) {
        password.classList.add('error');
        confirmPass.classList.add('error');
        errorMessage.textContent = 'Passwords do NOT match. Correct it.';
        return false;
    }

    if (!phone.value.match(
        /(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})/
    )) {
        phone.classList.add('error');
        errorMessage.textContent = 'Phone number needs to be exactly 10 digits';
        return;
    }

    if (password.value.length < 6) {
        password.classList.add('error');
        errorMessage.textContent = 'Password needs to be at least 6 characters long.';
        return ;
    }

    if (!password.value.match(/[a-z]/)) {
        password.classList.add("error");
        errorMessage.textContent =
          "Password needs to have at least 1 lower case letter.";
        return;
    }
    if (!password.value.match(/[A-Z]/)) {
        password.classList.add("error");
        errorMessage.textContent =
          "Password needs to have at least 1 upper case letter.";
        return;
    }
    if (!password.value.match(/\d+/g)) {
        password.classList.add("error");
        errorMessage.textContent = "Password needs to have at least 1 number.";
        return;
    }
    
    errorMessage.style.color = "green";
    errorMessage.textContent = "Form successfully submitted";

    setTimeout(() => {
        window.location.reload();
    }, 3000);
};

const formulary = document.querySelector("form");
formulary.addEventListener("submit", submit);