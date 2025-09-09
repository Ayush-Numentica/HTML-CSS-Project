
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



// Get search input
const searchInput = document.querySelector(".header-search-text");
const rows = document.querySelectorAll(".modern-table tbody tr");

// Extract student names into an array
const studentData = [...rows].map(row => ({
    row,
    name: row.querySelector("td:nth-child(2) span")?.innerText.trim()
}));

// Initialize Fuse.js
const fuse = new Fuse(studentData, {
    keys: ["name"],      
    threshold: 0.4,       
});

// Search event listener
searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.trim();
    rows.forEach(r => r.style.display = "none");

    if (query === "") {
        // Reset if input is empty
        rows.forEach(r => r.style.display = "");
        return;
    }
    const results = fuse.search(query);
    results.forEach(result => {
        result.item.row.style.display = "";
    });
});
