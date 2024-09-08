

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


