function submition(){
    let fname=document.contact_form.fname.value;
    let lname=document.contact_form.lname.value;
    let email=document.contact_form.email.value;
    let message=document.contact_form.message.value;

    var letters = /^[A-Za-z]+$/;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var flag=true;

    if(!letters.test(fname)||!letters.test(lname)||!letters.test(message)||!email_val.test(email))
    {
        alert("Enter each details correctly!");
        flag=false;
        return false;
    }
    
}