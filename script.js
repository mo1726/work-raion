// Mock IP-to-country mapping
const ipToCountryMap = {
    "192.168.1.1": "Morocco",
    "192.168.1.2": "Russia",
    "192.168.1.3": "United States",
    "192.168.1.4": "United Kingdom",
    "192.168.1.5": "China",
    "192.168.1.6": "Germany",
    "192.168.1.7": "France",
    "192.168.1.8": "Italy",
    "192.168.1.9": "Spain",
    "192.168.1.10": "Canada",
    "192.168.1.11": "Australia",
    "192.168.1.12": "Brazil",
    "192.168.1.13": "India",
    "192.168.1.14": "Japan",
    "192.168.1.15": "South Korea",
    "192.168.1.16": "Mexico",
    "192.168.1.17": "Saudi Arabia",
    "192.168.1.18": "South Africa",
    "192.168.1.19": "Egypt",
    "192.168.1.20": "Nigeria",
    "192.168.1.21": "Argentina",
    "192.168.1.22": "Chile",
    "192.168.1.23": "Colombia",
    "192.168.1.24": "Peru",
    "192.168.1.25": "Venezuela",
    "192.168.1.26": "Sweden",
    "192.168.1.27": "Norway",
    "192.168.1.28": "Finland",
    "192.168.1.29": "Denmark",
    "192.168.1.30": "Netherlands",
    "192.168.1.31": "Belgium",
    "192.168.1.32": "Switzerland",
    "192.168.1.33": "Austria",
    "192.168.1.34": "Poland",
    "192.168.1.35": "Czech Republic",
    "192.168.1.36": "Hungary",
    "192.168.1.37": "Ukraine",
    "192.168.1.38": "Turkey",
    "192.168.1.39": "Iran",
    "192.168.1.40": "Pakistan",
    "192.168.1.41": "Bangladesh",
    "192.168.1.42": "Thailand",
    "192.168.1.43": "Vietnam",
    "192.168.1.44": "Malaysia",
    "192.168.1.45": "Singapore",
    "192.168.1.46": "Philippines",
    "192.168.1.47": "New Zealand",
    "192.168.1.48": "Israel",
    "192.168.1.49": "United Arab Emirates",
    "192.168.1.50": "Qatar",
    "192.168.1.51": "Kuwait",
    "192.168.1.52": "Oman",
    "192.168.1.53": "Iraq",
    "192.168.1.54": "Syria",
    "192.168.1.55": "Lebanon",
    "192.168.1.56": "Jordan",
    "192.168.1.57": "Yemen",
    "192.168.1.58": "Afghanistan",
    "192.168.1.59": "Kazakhstan",
    "192.168.1.60": "Uzbekistan",
    "192.168.1.61": "Tajikistan",
    "192.168.1.62": "Kyrgyzstan",
    "192.168.1.63": "Turkmenistan",
    "192.168.1.64": "Azerbaijan",
    "192.168.1.65": "Georgia",
    "192.168.1.66": "Armenia",
    "192.168.1.67": "Belarus",
    "192.168.1.68": "Moldova",
    "192.168.1.69": "Romania",
    "192.168.1.70": "Bulgaria",
    "192.168.1.71": "Serbia",
    "192.168.1.72": "Croatia",
    "192.168.1.73": "Slovenia",
    "192.168.1.74": "Bosnia and Herzegovina",
    "192.168.1.75": "Albania",
    "192.168.1.76": "North Macedonia",
    "192.168.1.77": "Kosovo",
    "192.168.1.78": "Montenegro",
};

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
    updateScoreByLocation();
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

// Fetch user's IP address
async function getUserIP() {
    try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error("Error fetching IP:", error);
        return null;
    }
}

// Geolocation logic with mock IP support
async function updateScoreByLocation() {
    const userIP = await getUserIP();
    console.log("User IP:", userIP); // Debugging

    // Check if the user's IP is in the mock mapping
    if (userIP && ipToCountryMap[userIP]) {
        const countryName = ipToCountryMap[userIP];
        console.log("Mock country detected:", countryName); // Debugging

        let country = countries.find(c => c.name === countryName);
        if (country) {
            country.score++;
            localStorage.setItem("totalClicks", totalClicks);
            localStorage.setItem("countries", JSON.stringify(countries));
            localStorage.setItem("score", score);
            scoreElement.textContent = score;
            totalMiawElement.textContent = totalClicks;
            renderLeaderboard();
        } else {
            console.log("Country not found in the list:", countryName);
        }
    } else {
        // Fallback to real geolocation logic
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { latitude, longitude } = position.coords;
                const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                const data = await response.json();
                const countryName = data.countryName;
                console.log("Real country detected:", countryName); // Debugging

                let country = countries.find(c => c.name === countryName);
                if (country) {
                    country.score++;
                    localStorage.setItem("totalClicks", totalClicks);
                    localStorage.setItem("countries", JSON.stringify(countries));
                    localStorage.setItem("score", score);
                    scoreElement.textContent = score;
                    totalMiawElement.textContent = totalClicks;
                    renderLeaderboard();
                } else {
                    console.log("Country not found in the list:", countryName);
                }
            }, (error) => {
                console.error("Geolocation error:", error); // Debugging
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
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
    const totalClicksToDistribute = 300000;
    const baseClicks = 1000;
    const maxBonus = 4000;
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