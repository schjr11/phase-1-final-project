class plantAdapter {

    static getPlantOnPage(num){
      return fetch(`http://localhost:3000/plants/?_limit=50&_page=${num}`)
      .then(resp => resp.json())
    }
  
    static createPlant(data){
      return fetch("http://localhost:3000/plants", {
        method: "POST",
        headers: {"Accept": "application/json",
          "Content-type": "application/json"},
        body: JSON.stringify(data)
      })
      .then(resp => resp.json())
    }
  }