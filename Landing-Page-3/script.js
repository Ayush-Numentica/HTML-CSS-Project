
const logOutButton = document.querySelector('#log-out-btn');
const userImage = document.querySelector("#userImage");
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
const saveButton = document.querySelector("#save-button");

if (currentUser) {
    userImage.src = currentUser.avatar;
    userImage.style.borderRadius = "50%";
    userImage.style.height = "50px";
    userImage.style.height = "50px";
}
else {
    window.location.replace("../Login/index.html");
}


logOutButton.addEventListener('click', () => {
    window.location.replace("../Login/index.html");
    sessionStorage.removeItem("currentUser");
});


saveButton.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    const finalUserInfo=[];
    
    cards.forEach((card) => {
        const title = card.querySelector('.card-top-bar')?.innerText || "Untitled Section";
        const inputs = card.querySelectorAll('input');
        let finalData={};

        // console.log(`---${title}---`)

        inputs.forEach((input) => {
            let label = "";
            if (input.parentElement && input.parentElement.querySelector('span')) {
                label = input.parentElement.querySelector('span').innerText;
            }
            else if(input.type==="radio"  && input.parentElement.parentElement.parentElement.querySelector('span'))
            {
                label=input.parentElement.parentElement.parentElement.querySelector('span').innerText;
            }
            else {
                label = input.placeholder || input.type;
            }

            let value;
            
            if (input.type === "radio") {
                if (input.checked) {
                    value = input.value;
                    // console.log(`${label}:${value}`)
                    finalData[label]=value;
                }
            }
            else {
                value = input.value;
                // console.log(`${label}:${value}`);
                finalData[label]=value;
            }
        });
        finalUserInfo[title]=finalData;
    });
    console.log(finalUserInfo);

});