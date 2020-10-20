
const form = document.querySelector("#choice");

//saving data
form.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("travellers").add({
        From: form.from.value,
        To: form.to.value,
        Date: form.date.value,
        Time:form.time.value,
        Phone:form.PhoneNumber.value
    });
    var userPreference;

		if (confirm("Are you sure to submit?") == true) {
			userPreference = alert("Submitted successfully! Please wait while we find a driver for you.");
		} else {
			userPreference = alert("Submit Canceled!");
        }
        
        

    form.from.value = "";
    form.to.value = "";
    form.date.value = "";
    form.time.value = "";
    form.Phonenumber.value = ""
});

function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");  

    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-big").classList.toggle("change-big");  
}
function logout(){

    auth.signOut().then(function() {
window.location="default.html"

        
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        window.alert("Error:" + errorMessage);
      });
}
