const passList=document.querySelector('#PassList');

//create element and render travellers
function renderTravellers(doc){
let li = document.createElement('li');
let From = document.createElement('p');
let To = document.createElement('p');
let Date = document.createElement('p');
let Time = document.createElement('p');
let Phone = document.createElement('p');
let line = document.createElement('hr');

li.setAttribute('data-id', doc.id);

From.textContent = "From :" + doc.data().From;
//To.textContent = "To :" +doc.data().To;
//Date.textContent = "Date :" +doc.data().Date;
//Time.textContent = "Time :" +doc.data().Time;
//Phone.textContent = "Phone Number:" +doc.data().Phone;

li.appendChild(From);
li.appendChild(To);
li.appendChild(Date);
li.appendChild(Time);
li.appendChild(Phone);

passList.appendChild(li);
}


db.collection('travellers').get().then((snapshot) => {
snapshot.docs.forEach(doc =>{
   renderTravellers(doc);
})

})