let addPlant = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-plant-btn");
  const plantFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    addPlant = !addPlant;
    if (addPlant) {
      plantFormContainer.style.display = "block";
    } else {
      plantFormContainer.style.display = "none";
    }
  });
  plantFormContainer.addEventListener('submit', (e) => {
    e.preventDefault();
    postPlant(e.target.name.value, e.target.image.value);
  })
});

function getPlants() {
  fetch('http://localhost:3000/plants')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    data.map(p => renderPlant(p))
  })
}

function renderPlant(plants) {
  const plantCard = `<div class="card">
  <h2>${plants.name}</h2>
  <img src=${plants.image} class="plant-avatar" />
  <p>${plants.likes}</p>
  <button class="like-btn" id="[plant_id]">Like ❤️</button>
</div>`

  const plantGarden = document.getElementById('plant-collection')
  plantGarden.innerHTML += plantCard
}

function postPlant(name, url) {
  fetch('http://localhost:3000/plants', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "image": url
      "likes": 1
    })
  })
  .then(function(response) {
      return response.json();
  })
  .then(function(data){
    renderPlant(data)
  })
}
