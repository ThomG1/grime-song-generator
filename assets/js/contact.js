// Send email

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


//Form result

function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('mainmessage');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}
