// Retrieve values from localStorage
let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
let totalClicks = localStorage.getItem("totalClicks") ? parseInt(localStorage.getItem("totalClicks")) : 300000;

const audio = document.getElementById("audio");
const imagesContainer = document.getElementById("imges");
const firstImg = document.getElementById("firstImg");
const secondImg = document.getElementById("secondImg");
const scoreElement = document.getElementById("score");
const totalMiawElement = document.getElementById("totalMiaw");
const total = document.getElementById("TOTAL");
const leaderboardElement = document.getElementById("leaderboard");
const CA = document.getElementById("CA");
CA.textContent = CA.textContent.toUpperCase();




// Initialize totalClicks and score
totalMiawElement.textContent = totalClicks;
scoreElement.textContent = score;

// Ensure the leaderboard is hidden by default
leaderboardElement.style.display = "none";

// Track whether the button is currently pressed.
let isPressed = false;

// Set the initial state: first image visible, second image hidden.
firstImg.style.display = "block";
secondImg.style.display = "none";

// Press handler: hide first image, show second, and play sound.
function pressHandler(event) {
    if (isPressed) return;
    isPressed = true;

    event.preventDefault();
    console.log("Press event:", event.type);

    firstImg.style.display = "none";
    secondImg.style.display = "block";
    audio.play();

    // Increment score and total clicks
    score++;
    totalClicks++;
    localStorage.setItem("score", score);
    localStorage.setItem("totalClicks", totalClicks);
    scoreElement.textContent = score;
    totalMiawElement.textContent = totalClicks;

}

// Release handler: revert to the original state.
function releaseHandler(event) {
    if (!isPressed) return;
    isPressed = false;

    console.log("Release event:", event.type);
    firstImg.style.display = "block";
    secondImg.style.display = "none";
}

// Attach events using pointer events if available.
if (document.PointerEvent) {
    imagesContainer.addEventListener("pointerdown", pressHandler);
    document.addEventListener("pointerup", releaseHandler);
} else {
    imagesContainer.addEventListener("touchstart", pressHandler, { passive: false });
    imagesContainer.addEventListener("mousedown", pressHandler);
    document.addEventListener("touchend", releaseHandler, { passive: false });
    document.addEventListener("mouseup", releaseHandler);
}



// Leaderboard logic
const storedCountries = localStorage.getItem("countries");
const countries = storedCountries ? JSON.parse(storedCountries) : [
    { name: "Russia", score: 0 },
    { name: "United States", score: 0 },
    { name: "United Kingdom", score: 0 },
    { name: "China", score: 0 },
    { name: "Morocco", score: 0 }, // Morocco in the 5th position
    { name: "Germany", score: 0 },
    { name: "France", score: 0 },
    { name: "Italy", score: 0 },
    { name: "Spain", score: 0 },
    { name: "Canada", score: 0 },
    { name: "Australia", score: 0 },
    { name: "Brazil", score: 0 },
    { name: "India", score: 0 },
    { name: "Japan", score: 0 },
    { name: "South Korea", score: 0 },
    { name: "Mexico", score: 0 },
    { name: "Indonesia", score: 0 },
    { name: "Netherlands", score: 0 },
    { name: "Turkey", score: 0 },
    { name: "Saudi Arabia", score: 0 },
    { name: "Switzerland", score: 0 },
    { name: "Argentina", score: 0 },
    { name: "Sweden", score: 0 },
    { name: "Poland", score: 0 },
    { name: "Belgium", score: 0 },
    { name: "Thailand", score: 0 },
    { name: "Iran", score: 0 },
    { name: "Austria", score: 0 },
    { name: "Norway", score: 0 },
    { name: "United Arab Emirates", score: 0 },
    { name: "Israel", score: 0 },
    { name: "Singapore", score: 0 },
    { name: "Malaysia", score: 0 },
    { name: "Philippines", score: 0 },
    { name: "South Africa", score: 0 },
    { name: "Denmark", score: 0 },
    { name: "Colombia", score: 0 },
    { name: "Egypt", score: 0 },
    { name: "Ireland", score: 0 },
    { name: "Vietnam", score: 0 },
    { name: "Chile", score: 0 },
    { name: "Finland", score: 0 },
    { name: "Pakistan", score: 0 },
    { name: "Greece", score: 0 },
    { name: "Portugal", score: 0 },
    { name: "Iraq", score: 0 },
    { name: "Peru", score: 0 },
    { name: "New Zealand", score: 0 },
    { name: "Qatar", score: 0 },
    { name: "Kazakhstan", score: 0 },
    { name: "Czech Republic", score: 0 },
    { name: "Algeria", score: 0 },
    { name: "Kuwait", score: 0 },
    { name: "Hungary", score: 0 },
    { name: "Ukraine", score: 0 },
    { name: "Bangladesh", score: 0 },
    { name: "Romania", score: 0 },
    { name: "Oman", score: 0 },
    { name: "Venezuela", score: 0 },
    { name: "Sri Lanka", score: 0 },
    { name: "Belarus", score: 0 },
    { name: "Dominican Republic", score: 0 },
    { name: "Myanmar", score: 0 },
    { name: "Slovakia", score: 0 },
    { name: "Tunisia", score: 0 },
    { name: "Bulgaria", score: 0 },
    { name: "Serbia", score: 0 },
    { name: "Libya", score: 0 },
    { name: "Lebanon", score: 0 },
    { name: "Croatia", score: 0 },
    { name: "Uzbekistan", score: 0 },
    { name: "Jordan", score: 0 },
    { name: "Kenya", score: 0 },
    { name: "Ghana", score: 0 },
    { name: "Cuba", score: 0 },
    { name: "Nepal", score: 0 },
    { name: "Ecuador", score: 0 },
    { name: "Azerbaijan", score: 0 },
    { name: "Panama", score: 0 },
    { name: "Uganda", score: 0 },
    { name: "Costa Rica", score: 0 },
    { name: "Lithuania", score: 0 },
    { name: "Slovenia", score: 0 },
    { name: "Uruguay", score: 0 },
    { name: "Bahrain", score: 0 },
    { name: "Cameroon", score: 0 },
    { name: "Latvia", score: 0 },
    { name: "Paraguay", score: 0 },
    { name: "Zambia", score: 0 },
    { name: "Estonia", score: 0 },
    { name: "El Salvador", score: 0 },
    { name: "Iceland", score: 0 },
    { name: "Cyprus", score: 0 },
    { name: "Trinidad and Tobago", score: 0 },
    { name: "Senegal", score: 0 },
    { name: "Botswana", score: 0 },
    { name: "Jamaica", score: 0 },
    { name: "Namibia", score: 0 },
    { name: "Albania", score: 0 },
    { name: "Mali", score: 0 },
    { name: "Malta", score: 0 },
    { name: "Madagascar", score: 0 },
    { name: "Mozambique", score: 0 },
];

if (!storedCountries) {
    const totalClicksToDistribute = 3000000;
    const baseClicks = 2000;
    const maxBonus = 6000;
    const totalCountries = countries.length;
    let remainingClicks = totalClicksToDistribute;

    // Assign a random bonus to each country
    countries.forEach((country) => {
        const randomBonus = Math.floor(Math.random() * (maxBonus - baseClicks + 1)) + baseClicks;
        country.score = randomBonus;
        remainingClicks -= randomBonus;
    });

    // Distribute remaining clicks randomly
    while (remainingClicks > 0) {
        let randomIndex = Math.floor(Math.random() * totalCountries);
        countries[randomIndex].score++;
        remainingClicks--;
    }

    localStorage.setItem("countries", JSON.stringify(countries));
}

function renderLeaderboard() {
    const table = document.getElementById("leaderboardTable");
    if (!table) {
        console.error("Leaderboard table not found!");
        return;
    }

    // Clear existing rows (except the header)
    while (table.rows.length > 1) table.deleteRow(1);

    // Sort countries by score and render rows
    countries.sort((a, b) => b.score - a.score).forEach((country, index) => {
        const row = table.insertRow(-1);
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = country.name;
        row.insertCell(2).textContent = country.score;
    });
}

setInterval(() => {
    totalClicks += 40;
    localStorage.setItem("totalClicks", totalClicks);
    totalMiawElement.textContent = totalClicks;
}, 1000);

renderLeaderboard();

// Prevent double-tap zoom on mobile devices
document.addEventListener('dblclick', function (event) {
    event.preventDefault();
}, { passive: false });

// Prevent pinch-to-zoom on mobile devices
document.addEventListener('touchmove', function (event) {
    if (event.scale !== 1) {
        event.preventDefault();
    }
}, { passive: false });

console.log("Total element:", total);
console.log("Leaderboard element:", leaderboardElement);

total.addEventListener("click", () => {
    console.log("Total clicked!");
    if (leaderboardElement.style.display === "none" || leaderboardElement.style.display === "") {
        leaderboardElement.style.display = "block";
    } else {
        leaderboardElement.style.display = "none";
    }
});
// Modify the click handler
total.addEventListener("click", () => {
    if (!leaderboardTable.innerHTML) {
      renderLeaderboard();
    }
    // Toggle visibility
  });