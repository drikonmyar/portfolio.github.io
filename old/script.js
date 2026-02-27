const messageSound = document.getElementById("messageSound");
const successSound = document.getElementById("successSound");
const errorSound = document.getElementById("errorSound");

var preloader = document.getElementById("anim");

function preload() {
    setTimeout(function () { preloader.style.display = 'none'; }, 1500);

}

// feedback form submission

function sendEmail() {
    Email.send({
        SecureToken: "", // Secure Token provided by SMTPJS for direct emailing
        To: 'nabyenduojha99@gmail.com', // Replace with your email
        From: "nabyenduojha@gmail.com",
        Subject: "New Message Enquiry",
        Body: `
            <b>Name: </b>${document.getElementById("form-name").value} <br>
            <b>Email: </b>${document.getElementById("form-email").value} <br>
            <b>Subject: </b>${document.getElementById("form-subject").value} <br>
            <b>Message: </b>${document.getElementById("form-message").value}
        `
    }).then(message => {
        if (message === 'OK') {
            successSound.play();
            alert("Message sent successfully");
        } else {
            errorSound.play();
            alert("Some error occurred");
        }
    });
}


// // website refresh auto-counter starts

// var counterContainer = document.querySelector(".website-counter");
// var visitCount = localStorage.getItem("page_view");

// if (visitCount) {
//     visitCount = Number(visitCount) + 1;
//     localStorage.setItem("page_view", visitCount);
// } else {
//     visitCount = 994;
//     localStorage.setItem("page_view", visitCount);
// }
// counterContainer.innerHTML = visitCount;

// // auto-counter ends



// Go to top starts

mybutton = document.getElementById("topBtn");
const headerSection = document.querySelector(".header");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (headerSection) {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            headerSection.classList.add("shadow-nav");
        } else {
            headerSection.classList.remove("shadow-nav");
        }
    }
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Go to top ends



// Initialize Lucide icons
// lucide.createIcons();



// ai logic starts

// Variable to store additional text from the file
let additionalText = "";

// Fetch additional text from the text file
async function loadAdditionalText() {
    try {
        const response = await fetch('ai-instruction.txt'); // Read the additional text file
        additionalText = await response.text();  // Get the string content from the text file
    } catch (error) {
        console.error('Error loading additional text:', error);
    }
}

// DOM Elements
const openChatBtn = document.getElementById("openChatBtn");
const closeChatBtn = document.getElementById("closeChatBtn");
const chatPopup = document.getElementById("chatPopup");
const sendMessageBtn = document.getElementById("sendMessageBtn");
const userInput = document.getElementById("userInput");
const chatMessages = document.getElementById("chatMessages");

let isFirstClick = true;

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        openChatBtn.click(); // Simulate a click on the AI Assist button
    }, 3000); // 3-second delay for preloader
});

function openChatWindow() {
    chatPopup.style.display = "block";

    if (isFirstClick) {
        isFirstClick = false;

        // Show "Typing..." message
        const typingMessage = document.createElement("div");
        typingMessage.classList.add("message", "bot-message");
        typingMessage.innerHTML = `<span class="text">Typing...</span>`;
        chatMessages.appendChild(typingMessage);

        // Delay before showing the actual message
        setTimeout(() => {
            typingMessage.innerHTML = `<span class="text">Hello! 👋 How can I help you today?</span>`;
            messageSound.play().catch(error => console.log("Autoplay blocked:", error));
        }, 0); // 0-second delay
    }
}

// Click event handler for manual opening
openChatBtn.addEventListener("click", openChatWindow);

// Close the chat popup
closeChatBtn.addEventListener("click", () => {
    chatPopup.style.display = "none";
});

// Send message to the chat when the send button is clicked
sendMessageBtn.addEventListener("click", async () => {
    await sendMessage();
});

// Send message when Enter is pressed
userInput.addEventListener("keydown", async (event) => {
    if (event.key === "Enter" && userInput.value.trim() !== "") {
        event.preventDefault();  // Prevent form submission if in a form
        await sendMessage();
    }
});

// Function to send the message
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        loadAdditionalText();
        // Display the user's message with shadow effect
        const userMessageElement = document.createElement("div");
        userMessageElement.classList.add("message", "user-message");
        userMessageElement.innerHTML = `<span class="text">${userMessage}</span>`;
        chatMessages.appendChild(userMessageElement);

        // Clear input field
        userInput.value = "";

        // Simulate API call to OpenRouter for a response
        await getBotResponse(additionalText + userMessage);
    }
}

const API_KEY = ""; // Replace with actual API key
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${API_KEY}`;

// Function to make API call and get bot response using Gemini API
async function getBotResponse(userMessage) {
    const errorText = "Sorry, I am offline now. Please mail me at nabyenduojha99@gmail.com";
    const responseElement = document.createElement("div");
    responseElement.classList.add("message", "bot-message");
    responseElement.innerHTML = `<span class="text">Typing...</span>`;
    chatMessages.appendChild(responseElement);

    try {
        // Make API call to Gemini API
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userMessage }] }]
            })
        });

        const data = await response.json();

        // Extract the bot's response
        const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || errorText;

        // Update the bot's message with the response
        responseElement.querySelector(".text").textContent = botResponse;
    } catch (error) {
        console.error("Error:", error);
        responseElement.querySelector(".text").textContent = errorText;
    } finally {
        messageSound.play();
    }

    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ai logic ends

// section header highlight while scroll starts

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

    function changeActiveNav() {
        let scrollY = window.pageYOffset;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 50; // Adjust for navbar height
            const sectionHeight = section.clientHeight;
            const sectionId = section.getAttribute("id");

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", changeActiveNav);
});

// section header highlight while scroll ends
