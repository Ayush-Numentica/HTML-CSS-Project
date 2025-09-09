

let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
const userName = document.querySelector("#userName");
const userImage = document.querySelector("#userImage");
const logOutButton=document.querySelector("#log-out-btn");

console.log(currentUser)
console.log(userImage);
console.log(userName);

if (currentUser) {
    userName.innerHTML = `Hey ${currentUser.name}.`
    userImage.src = currentUser.avatar;
    userImage.style.borderRadius="50%";
    userImage.style.height="50px";
    userImage.style.height="50px";

}

logOutButton.addEventListener('click',()=>{
    window.location.replace("../Login/index.html");
    sessionStorage.removeItem("currentUser");
});