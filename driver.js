function onClickMenu(){
    document.getElementById("menu").classList.toggle("change");  

    document.getElementById("nav").classList.toggle("change");

    document.getElementById("menu-big").classList.toggle("change-big");  
}


const form = document.querySelector("#driver");

//saving data
form.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("drivers").add({
        From: form.from.value,
        To: form.to.value,
        Date: form.date.value,
        Time:form.time.value,
        License:form.license.value,
        Phone_Number:form.Phone_Number.value
    });

    var userPreference;

		if (confirm("Are you sure to submit?") == true) {
			userPreference = alert("Submitted successfully! Please wait while we find a passenger for you.");
		} else {
			userPreference = alert("Submit Canceled!");
        }
        
    

    form.from.value = "";
    form.to.value = "";
    form.date.value = "";
    form.time.value = "";
    form.license.value="";
    form.Phone_Number.value
});



form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location="choice.html"
    form.reset

}).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error:" + errorMessage);
  });
