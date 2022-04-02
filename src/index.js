// Don't show container right away
let showForm = false

// Get plants when the page loads immediately
document.addEventListener("DOMContentLoaded", () => {
  getPlants();
// Click "Add a new plant!" to open the container and to close it again
  const addBtn = document.querySelector("#new-plant-btn")
  const plantForm = document.querySelector('.container')
  addBtn.addEventListener('click', () =>{
    if(showForm === false){
      showForm = true;
      plantForm.style.display = 'block'
    } else if(showForm === true){
      showForm = false
      plantForm.style.display = 'none'
    }
  })

// Post a plant by submitting on the form
  plantForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postPlant(e.target.name.value, e.target.image.value)
  })
})

// Post a new plant into the db.json and return a response
function postPlant(name, url) {
  fetch ('http://localhost:3000/plants', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "image": url,
      "likes": 1
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    getPlants(data)
  })
}

// Render the plants that you get
function getPlants() {
  fetch ('http://localhost:3000/plants/')
  .then(function(response) {
    return response.json();
  })
  .then(plants => renderPlant(plants))

}

function renderPlant(plants) {
// Create a card for each plant
  plants.forEach(p => {
    const plantCard = document.createElement("div")
    plantCard.className = "card"
    plantCard.id = p.id;
    plantCard.innerHTML = `
    <h2>${p.name}</h2>
    <img src=${p.image} class="plant-avatar" />
    <p>${p.likes}</p><span> Likes </span>
    <button class="like-btn"> Like </button>
    <button class="delete-btn"> Delete </button>`

// Create a click event to "like" a plant and to delete a plant by removing it
  plantCard.addEventListener("click", (event) =>{
      if (event.target.matches("button.like-btn")){
        p.likes++
        plantCard.querySelector("p").innerText = p.likes
        increaseLikes(p)
      }
      if(event.target.matches("button.delete-btn")){
        plantCard.remove()
        deletePlant(p);
      }
    })
    const plantGarden = document.getElementById('plant-collection');
    plantGarden.appendChild(plantCard);

  })
}

// Create a patch request for "liking" a plant on a plant card
function increaseLikes(p){
  fetch(`http://localhost:3000/plants/${p.id}`,{
    method: "PATCH",
    headers:{
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      likes: p.likes
    })
  });
}

//Create a delete request to get rid of a plant card
function deletePlant(p){
  fetch(`http://localhost:3000/plants/${p.id}`,{
    method: "DELETE",
    headers:{
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
}
