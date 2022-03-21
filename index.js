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

})

function getPlants() {
  fetch ('http://localhost:3000/plants')
  .then(function(response) {
    return response.json();
  })
  .then(function(data))
}