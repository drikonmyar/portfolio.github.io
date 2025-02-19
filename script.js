

var preloader = document.getElementById("anim");

function preload() {
    setTimeout(function () { preloader.style.display = 'none'; }, 2000);

}

// feedback form submission

function sendEmail() {
    Email.send({
        SecureToken: "447fa0a6-6dba-4968-ad69-0638c418358e", // Secure Token provided by SMTPJS for direct emailing
        To: 'nabyenduojha99@gmail.com', // Replace with your email
        From: "nabyenduojha@gmail.com",
        Subject: "New Message Enquiry",
        Body: `
            <b>Name: </b>${document.getElementById("form-name").value} <br>
            <b>Email: </b>${document.getElementById("form-email").value} <br>
            <b>Subject: </b>${document.getElementById("form-subject").value} <br>
            <b>Message: </b>${document.getElementById("form-message").value}
        `
    }).then(
        message => alert(message === 'OK' ? "Message sent successfully" : "Some error occurred")
    );
}


// website refresh auto-counter starts

var counterContainer = document.querySelector(".website-counter");
var visitCount = localStorage.getItem("page_view");

if (visitCount) {
    visitCount = Number(visitCount) + 1;
    localStorage.setItem("page_view", visitCount);
} else {
    visitCount = 994;
    localStorage.setItem("page_view", visitCount);
}
counterContainer.innerHTML = visitCount;

// auto-counter ends



// Go to top starts

mybutton = document.getElementById("topBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
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
lucide.createIcons();



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

// Open the chat popup
openChatBtn.addEventListener("click", () => {
    chatPopup.style.display = "block";
});

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

const API_KEY = "AIzaSyBi7CBKdqLY8kXNREnLPGG-w6U7NZMPDxk"; // Replace with your actual API key
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`;

// Function to make API call and get bot response using Gemini API
async function getBotResponse(userMessage) {
    const responseElement = document.createElement("div");
    responseElement.classList.add("message", "bot-message");
    responseElement.innerHTML = `<span class="text">Typing...</span>`;
    chatMessages.appendChild(responseElement);

    try {
        // Make API call to Gemini API
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
<<<<<<< HEAD
                "Content-Type": "application/json",
                "Authorization": "Bearer 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", // Replace with your API key
                "HTTP-Referer": "<YOUR_SITE_URL>", // Optional
                "X-Title": "<YOUR_SITE_NAME>" // Optional
=======
                "Content-Type": "application/json"
>>>>>>> 3da50ed (added gemini api)
            },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userMessage }] }]
            })
        });

        const data = await response.json();

        // Extract the bot's response
        const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

        // Update the bot's message with the response
        responseElement.querySelector(".text").textContent = botResponse;
    } catch (error) {
        console.error("Error:", error);
        responseElement.querySelector(".text").textContent = "Sorry, I am offline now. Please mail me at nabyenduojha99@gmail.com";
    }

    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ai logic ends
