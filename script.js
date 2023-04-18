

var preloader = document.getElementById("anim");

function preload() {
    setTimeout(function () { preloader.style.display = 'none'; }, 2000);

}


function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "submitted.successfully@gmail.com",
        Password: "", // Enter password here
        To: 'portfolio@nojha.in',
        From: document.getElementById('form-email').value,
        Subject: "New Message Enquiry",
        Body: "<b>Name: </b>" + document.getElementById("form-name").value
            + "<br> <b>Email: </b>" + document.getElementById("form-email").value
            + "<br> <b>Subject: </b>" + document.getElementById("form-subject").value
            + "<br> <b>Message: </b>" + document.getElementById("form-message").value
    }).then(
        Email.send({
            Host: "smtp.gmail.com",
            Username: "submitted.successfully@gmail.com",
            Password: "eecyqyeufhhndmzx",
            To: document.getElementById('form-email').value,
            From: 'portfolio@nojha.in',
            Subject: "Thanks For Your Submission",
            Body: "Hi,<br><br>Thank you for your message. I will repond to you as soon as possible. Stay healthy, stay safe & stay tuned. Have a good day.<br><br>Best regards,<br>Nabyendu Ojha"
        }).then(
            message => {
                if (message == 'OK') {
                    alert("Message sent successfully");
                }
                else {
                    console.error(message);
                    alert("Some error occurred");
                }
            }
        )
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


