function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['contact-box']["name"].value;
    // if (name.length<5){
    //     seterror("name", "*Length of name is too short");
    //     returnval = false;
    // }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['contact-box']["email"].value;
    if (email.length>30){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['contact-box']["phone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }
    var message = document.forms['contact-box']["message"].value;
    if (message.length != 10){
        seterror("message", "*Enter your message!");
        returnval = false;
    }

   

    return returnval;
}

