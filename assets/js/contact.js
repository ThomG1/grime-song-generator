/* jshint esversion: 11 */
// Send email

const submit = document.getElementById("submit");

submit.addEventListener("click", sendMail);

function sendMail() {
    let params = {
        name: document.getElementById("fullname").value,
        email: document.getElementById("emailaddress").value,
        message: document.getElementById("mainmessage").value,

    };

    const formName = document.getElementById("fullname");
    const formEmail = document.getElementById("emailaddress");
    const formMessage = document.getElementById("mainmessage");
    
    const serviceID = "service_zcjlh8m";
    const templateID = "contact_form";


    if (formName.checkValidity() && formEmail.checkValidity() && formMessage.checkValidity()) {
        emailjs.send(serviceID, templateID, params)
        .then(
            res => {
                document.getElementById("fullname").value = "";
                document.getElementById("emailaddress").value = "";
                document.getElementById("mainmessage").value = "";
                console.log(res);
            }
        )
        .catch((err) => console.log(err));
    return false;  
    }

}