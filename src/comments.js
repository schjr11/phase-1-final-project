  // const deleteBtn = document.querySelector("#delete-btn")
  // deleteBtn.addEventListener('click', () =>{
  //   console.log("test")
  // })

    // const plantCard =`<div class="card">
  //   <h2>${p.name}</h2>
  //   <img src=${p.image} class="plant-avatar" />
  //   <p>${p.likes} Likes </p>
  //   <button class="like-btn"> Like </button>
  //   <button class="delete-btn" id=${p.image}> Delete </button>

  // </div>`
  // plantCard.addEventListener("click", (event) =>{
  //   if (event.target.matches("button.like-btn")){
  //     p.likes++
  //     plantCard.querySelector("p").innerText = p.likes
  //     // increaseLikes(toy)
  //   }
  // })

  // const plantGarden = document.getElementById('plant-collection')
  // plantGarden.innerHTML += plantCard;

    // .then(function(data) {
  //   data.map((p) => {
  //     renderPlant(p)
  //     deletePlant()
  //   })
  // })

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
//     }
//     })
//   })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     renderPlant(data)
//   })
// }

// function deletePlant(){
//   const deleteBtns = document.querySelectorAll(".delete-btn");
//   for(let i = 0; i < deleteBtns.length; i++){
//     // console.log(console.log(deleteBtns[i]));
//     deleteBtns[i].addEventListener('click', (e) => test(e))
//   }
// }

// function test(e){
//   console.log(e.target.id);
// }