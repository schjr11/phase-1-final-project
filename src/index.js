let addPlant = false

document.addEventListener("DOMContentLoaded", () => {
  getPlants();
  const addBtn = document.querySelector("#new-plant-btn")
  const plantForm = document.querySelector('.container')
  addBtn.addEventListener('click', () =>{
    addPlant = !addPlant
    if (addPlant) {
      plantForm.style.display = 'block'
    } else {
      plantForm.style.display = 'none'
    }
  })
plantForm.addEventListener('submit', (e) => {
  e.preventDefault();
})
})

function getPlants() {
  fetch ('http://localhost:3000/plants/')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    data.map((p) => renderPlant(p))
  })
}

function renderPlant(p) {
  const plantCard =`<div class="card">
    <h2>${p.name}</h2>
    <img src=${p.image} class="plant-avatar" />
    <p>${p.likes} Likes </p>
    <button class="like-btn"> Like </button>
  </div>`

  const plantGarden = document.getElementById('plant-collection')
  plantGarden.innerHTML += plantCard 
}

