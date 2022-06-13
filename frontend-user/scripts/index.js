let url = "http://localhost:8000/api/v1/Items/AllItems";
var items_list = [];
window.addEventListener('load', (event) => {
  axios({
    method: "GET",
    url: url,
    headers: new Headers({
      'Authorization': 'Bearer' + localStorage.getItem('user_token')
    })
  }).then(function (response) {
    console.log("Hey")
    let items = response.data.Items;
    items_list.push(items);
  let parent = document.getElementById("itemslist");
  console.log(items_list[0])
  for(let i = 0; i<items_list[0].length;i++){
    //Create Elements
    let name = document.createElement("h2");
    let price = document.createElement("p");
    let image = document.createElement("img");
    let location = document.createElement("p");
    let favorite = document.createElement("p");
    let itemcard = document.createElement("div");
    let description = document.createElement("p");
    
    // Add ClassLists
    name.classList.add("attr","name");
    price.classList.add("attr","price");
    location.classList.add("attr", "loc");
    favorite.classList.add("favorite");
    itemcard.classList.add("itemcard");
    description.classList.add("attr", "desc");
    image.classList.add("imagecontainer");
    
    // Add Text
    name.innerText = items_list[0][i]["name"]
    price.innerText = items_list[0][i]["price"] + "$"
    location.innerText = items_list[0][i]["location"]
    description.innerText = items_list[0][i]["description"]
    image.src = items_list[0][i].image
    favorite.innerText = "❤";

    // Append to list
    itemcard.append(name, price, location, favorite, description, image)
    parent.append(itemcard)
  }
  });
});

