// Get the references.
let PasswordShowHideRef = document.querySelector(".show-hide");
let passwordInputRef = document.querySelector(".inp2");
const enrollBtn = document.getElementById('enrollBtn');
const tooltip = document.getElementById('tooltip');
const loginButtonRef = document.querySelector(".button");

function fnInputChange(eve) {
    let value = eve.target.value;

    if (value) {
        PasswordShowHideRef.innerText = "Show";
        loginButtonRef.style.backgroundColor = "rgb(23, 159, 23)"; // Change button color

        // Reset animation by removing and re-adding the class
        PasswordShowHideRef.style.animation = 'none';
        PasswordShowHideRef.offsetHeight; /* trigger reflow */
        PasswordShowHideRef.style.animation = '';
        PasswordShowHideRef.style.animation = 'slideInFromRight 1s ease-out forwards';
    } else {
        PasswordShowHideRef.innerText = "";
        PasswordShowHideRef.style.opacity = '0'; // Reset visibility
        loginButtonRef.style.backgroundColor = "#ddd"; // Reset button color if empty
    }
}

// Event listener for the "Show/Hide" toggle
PasswordShowHideRef.addEventListener('click', function (eve) {
    // Prevent the click event from focusing the input field
    eve.preventDefault();

    if (passwordInputRef.type === "password") {
        passwordInputRef.type = "text";
        PasswordShowHideRef.innerText = "Hide";
    } else {
        passwordInputRef.type = "password";
        PasswordShowHideRef.innerText = "Show";
    }
});

// Event listener for input change in password field
passwordInputRef.addEventListener('input', fnInputChange);


