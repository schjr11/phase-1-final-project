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
    postPlant(e.target.name.value, e.target.image.value)
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
    <button class="delete-btn"> Delete </button>
  </div>`

  const plantGarden = document.getElementById('plant-collection')
  plantGarden.innerHTML += plantCard 
}

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
    renderPlant(data)
  })
}



// function patchPlant(newNumberOfLikes) {
//   fetch ('http://localhost:3000/plants/:id', {
//     method: 'PATCH',
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       "likes": newNumberOfLikes,
//     })
//   })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     renderPlant(data)
//   })
// }

// function deletePlant(name, url) {
//   fetch ('http://localhost:3000/plants/', {
//     method: 'DELETE',
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     },
//     body: JSON.stringify({
//       "name": name,
//       "image": url,
//     })
//   })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     renderPlant(data)
//   })
// }

// How to make a delete button??????????