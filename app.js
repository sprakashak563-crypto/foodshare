console.log("FoodShare Website Loaded Successfully!");
// ===============================
// FOODSHARE - MAIN JAVASCRIPT
// ===============================


// ===============================
// REGISTER FORM
// ===============================

const registerForm = document.querySelector("#registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const password = document.querySelector("#password").value;
        const confirmPassword = document.querySelector("#confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}


// ===============================
// LOGIN FORM
// ===============================

const loginForm = document.querySelector("#loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if (email === "" || password === "") {

            alert("Please fill all fields!");

            return;
        }

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    });

}


// ===============================
// DONATE FOOD FORM
// ===============================

const donateForm = document.querySelector("#donateForm");

if (donateForm) {

    donateForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your food donation has been submitted successfully.");

        donateForm.reset();

        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 1000);

    });

}


// ===============================
// REQUEST FOOD BUTTON
// ===============================

const requestButtons = document.querySelectorAll(".request-btn");

requestButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Food request sent successfully!");

    });

});


// ===============================
// LOGOUT
// ===============================

const logoutButtons = document.querySelectorAll(
    ".logout-btn, .admin-logout"
);

logoutButtons.forEach(function (button) {

    button.addEventListener("click", function (event) {

        const confirmLogout = confirm(
            "Are you sure you want to logout?"
        );

        if (!confirmLogout) {

            event.preventDefault();

        }

    });

});