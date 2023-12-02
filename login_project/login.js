const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// handle onclick events for submit button
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    // get values from form
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // check if the values provided by the user in form are matching our requirements
    // currently set to "" for both user and pass
    // needs changing 
    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        location.reload();
    }
    else {
        // show error when user or pass doesn't match
        loginErrorMsg.style.opacity = 1;
    }
})