var preloader = document.getElementById("anim");

function pingMe() {

    setTimeout(function () { preloader.style.display = 'none'; }, 2000);

}

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "jgecsongs1@gmail.com",
        Password: "gpnsacsaziycbhhp",
        To: 'nabyenduojha99@gmail.com',
        From: document.getElementById('form-email').value,
        Subject: "New Message Enquiry",
        Body: "<b>Name: </b>" + document.getElementById("form-name").value
            + "<br> <b>Email: </b>" + document.getElementById("form-email").value
            + "<br> <b>Subject: </b>" + document.getElementById("form-subject").value
            + "<br> <b>Message: </b>" + document.getElementById("form-message").value
    }).then(
        alert("Message sent successfully")
        // message => alert("Message sent successfully")
    );
}
