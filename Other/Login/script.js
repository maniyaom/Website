function validatePincode(){
    let pincode = document.getElementById("pin").value;
    let valid = true;
    if(pincode.length == 6){
        for(let i=0; i<pincode.length; i++){
            let k = pincode.charAt(i);
            if(!(k >= '0' && k <= '9')){
                valid = false;
                break;
            }
        }
    }
    else{
        valid = false;
    }
    if(valid == true){
        alert("Pincode is valid !!")
    }
    else{
        document.getElementById("pin").style.border = "1px solid red";
        document.getElementById("pinError").style.opacity = "1";
    }
}


function validateUser(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username == "root" && password == "21478963"){
        window.location.href = "welcome.html"
    }
    else{
        document.getElementById("username").style.border = "1px solid red";
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("usernameOrPassError").style.opacity = "1";
        document.getElementById("forgotpasswordLink").style.position = "relative";
        document.getElementById("forgotpasswordLink").style.top = "20px"
    }
}