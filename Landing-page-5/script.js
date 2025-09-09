const deleteButtons = document.querySelectorAll('.del-btn');
const logOutButton = document.querySelector('#log-out-btn');
const userImage = document.querySelector("#userImage");

const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

if (currentUser) {
    userImage.src = currentUser.avatar;
    userImage.style.borderRadius = "50%";
    userImage.style.height = "50px";
    userImage.style.height = "50px";
}
else {
    window.location.replace("../Login/index.html");
}
deleteButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const row = btn.parentElement.parentElement.parentElement.parentElement;
        console.log(row);
        row.style.display = "none";
    })
});

logOutButton.addEventListener('click', () => {
    window.location.replace("../Login/index.html");
    sessionStorage.removeItem("currentUser");
});
