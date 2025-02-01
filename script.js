

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

// Function to make API call and get bot response
async function getBotResponse(userMessage) {
    const responseElement = document.createElement("div");
    responseElement.classList.add("message", "bot-message");
    responseElement.innerHTML = `<span class="text">Typing...</span>`;
    chatMessages.appendChild(responseElement);

    try {
        // Make API call to OpenRouter
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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", // Replace with your API key
                "HTTP-Referer": "<YOUR_SITE_URL>", // Optional
                "X-Title": "<YOUR_SITE_NAME>" // Optional
            },
            body: JSON.stringify({
                model: "openai/gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: userMessage
                    }
                ]
            })
        });

        const data = await response.json();

        // Update the bot's message with the response
        responseElement.querySelector(".text").textContent = data.choices[0].message.content;
    } catch (error) {
        console.error("Error:", error);
        responseElement.querySelector(".text").textContent = "Sorry, there was an error fetching the response.";
    }

    // Scroll to the latest message
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// ai logic ends
