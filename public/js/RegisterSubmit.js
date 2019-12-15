function checkRegister(){
    //alert("external js link working");
    
    //Checking if the user hasn't filled in the form
    //verifying email
    var email=document.forms["registerForm"]["email"].value;
    var emailLength = email.length;
    var emailCheck=email.includes("@");
    var emailCheck2=email.includes(".");
    var validEmail=true;
    var validPassword=true;
    var validTerms=true;
   
    if(email == "" ||email ==null){
        alert("Email must be filled in to register");
        validEmail==false;
        return;
    }
    if(emailLength <8 ||emailLength>65 ){
        alert("Email Length is not valid");
        validEmail==false;
        return;
    }
    if(emailCheck==false){
        alert("A valid email must include an @ symbol");
        validEmail==false;
        return;
    }
    if(emailCheck2==false){
        alert("A valid email must include a . ");
        validEmail==false;
        return;
    }
    //verifying password
    var password=document.forms["registerForm"]["password"].value;
    var passwordLength = password.Length;
    if(password== "" || password == null){
        alert("You must create a password");
        validPassword==false;
        return;
    }
    //checking that the user has agreed to the T&C's
    if (document.getElementById("checkTerms").checked!=true){
        alert("You must agree to the Terms & Coniditions");
        validTerms==false;
        return;
    }
    if(validEmail==true && validPassword==true &&validTerms==true){
        alert("You have successfully registered");
		window.location = "login.html";
    
    }
}//end of function