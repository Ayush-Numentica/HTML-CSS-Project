const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const inputEmail = document.querySelector("#Email").value;
    const inputPassword = document.querySelector('#Password').value;
    const loginStatus = document.querySelector('#loginStatus');
    if (inputEmail.length === 0 || inputPassword.length === 0) {
        loginStatus.innerHTML = `you have empty field`;
        loginStatus.style.color = "#ea3232ff";
        return;
    }

    if (typeof inputEmail !== "string" || !inputEmail.includes('@') || !inputEmail.includes('.')) {
        loginStatus.innerHTML = "You have written incorrect information in email field";
        loginStatus.style.color = "#ea3232ff"
        return;
    }
    if (inputPassword.length < 6 || typeof inputPassword !== "string") {
        loginStatus.innerHTML = "You have written incorrect information in password field";
        loginStatus.style.color = "#ea3232ff"
        return;
    }



    fetch('../Login/users.json')
        .then((response) => {
            return response.json();
        })
        .then((userData) => {
            console.log(userData);

            const matchedUser = userData.filter(user =>
                user.email === inputEmail && user.password === inputPassword
            )

            // for (let i = 0; i < userData.length; i++) {
            if (matchedUser.length > 0) {
                loginStatus.innerHTML = "Login Succesful";
                loginStatus.style.color = "#9dcd63ff";
                window.location.href = "../Student Dashboard/index.html";
                sessionStorage.setItem("currentUser", JSON.stringify(matchedUser[0]));
                // break;
            }
            else {
                loginStatus.innerHTML = "Invalid email or password";
                loginStatus.style.color = "#ea3232ff";
            }
            // }
        })
        .catch((error) => {
            console.log(error);
        })
})