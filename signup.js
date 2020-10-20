

  //Listen for form submit
const signUp=document.querySelector("#signupForm");
signUp.addEventListener("submit", (e) => {
  e.preventDefault();
    //get user info
    const email=signUp["email"].value;
    const password=signUp["password"].value;  
    console.log(email, password) 

    //sign up user
      auth.createUserWithEmailAndPassword(email, password).then(cred =>{
         window.alert("Sign up succesful");
         window.location="profile.html"
       signUpForm.reset
        
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
        

});

      

//confirm password
function checkPass()
{
    //Store the password field objects into variables ...
    var password = document.getElementById('password');
    var confirm  = document.getElementById('confpass');
    //Store the Confirmation Message Object ...
    var message = document.getElementById('confirm-message2');
    //Set the colors we will be using ...
    var good_color = "#66cc66";
    var bad_color  = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(password.value == confirm.value){
        //The passwords match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        
        message.style.color           = good_color;
        message.innerHTML             = 'Passwords Match!';
    }else{
        //The passwords do not match.
        //Set the color to the bad color and
        //notify the user.
    
        message.style.color           = bad_color;
        message.innerHTML             = 'Passwords Do Not Match!';
    }
}  
