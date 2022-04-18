let showForm = false

document.addEventListener("DOMContentLoaded", () => {
  getPlants();

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

  plantForm.addEventListener('submit', (e) => {
    e.preventDefault();
    postPlant(e.target.name.value, e.target.image.value)
  })
})

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

function getPlants() {
  fetch ('http://localhost:3000/plants/')
  .then(function(response) {
    return response.json();
  })
  .then(plants => renderPlant(plants))

}

function renderPlant(plants) {
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

function deletePlant(p){
  fetch(`http://localhost:3000/plants/${p.id}`,{
    method: "DELETE",
    headers:{
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
}
