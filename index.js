let addPlant = false

document.addEventListener("DOMContentLoaded", () => {
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