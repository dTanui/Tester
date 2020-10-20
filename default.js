firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    window.location="index.html"
  
  } else {
    
  }
});

  //login
  const signin = document.querySelector("#signinForm");
  signin.addEventListener("submit", (e) =>{
      e.preventDefault();

      //get user info
      const email=signin["email"].value;
      const password=signin["password"].value;

      auth.signInWithEmailAndPassword(email, password).then(cred =>{
         
        signinForm.reset
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error:" + errorMessage);
      })

  });