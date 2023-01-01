function sendMail () {
    var params = {
        name:document.getElementById("fullname").value,
        email:document.getElementById("emailaddress").value,
        message:document.getElementById("mainmessage").value,

    };

    const serviceID = "service_zcjlh8m";
const templateID = "contact_form"; 

emailjs.send(serviceID,templateID,params)
.then(
    res => {
        document.getElementById("fullname").value = "";
        document.getElementById("emailaddress").value = "";
        document.getElementById("mainmessage").value = "";
        console.log(res);
      

    }
)

.catch((err)=> console.log(err));
return false;
}
