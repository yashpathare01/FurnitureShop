
function validate() {
    var name = document.bill.fname.value;
    var email = document.bill.email.value;
    var address = document.bill.adr.value;
    var city = document.bill.city.value;
    var state = document.bill.state.value;
    var pincode = document.bill.pin.value;

    var letters = /^[A-Za-z]+$/;
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pinletter = (/^[0-9]+$/);
    var flag=true;

    if (!letters.test(name) || !email_val.test(email) || !pinletter.test(pincode)) {
        alert("Enter each details correctly!");
        flag=false;
        return false;
    }


}

