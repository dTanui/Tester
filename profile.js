
const form = document.querySelector("#profiles");


//saving data
form.addEventListener("submit", (e) => {
    e.preventDefault();
    db.collection("Profiles").add({
        FirstName: form.firstname.value,
        LastName: form.lastname.value,
        IdNumber: form.id_number.value,
        PhoneNumber:form.phone_number.value
    });

    if (confirm("Are you sure to submit?") == true) {
        window.location="index.html"
    } else {
        window.alert("Submit Canceled!");
    }
})