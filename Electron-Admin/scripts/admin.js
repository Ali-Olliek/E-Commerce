// Page Sections
const add_item_page = document.getElementById("createitem");
const add_category_page = document.getElementById("category");

// Side Bar Buttons to Toggle Section Display
const add_item_btn = document.getElementById("additem");
const add_category_btn = document.getElementById("addcat");

// Submit Form Data
const add_item = document.getElementById("submit-add-item");
const add_category = document.getElementById("submit-add-category");

// Toggle Section Display
window.onload = function () {
  add_item_page.style.display = "block";
  add_category_page.style.display = "none";
};

add_item_btn.addEventListener("click", function () {
  add_item_page.style.display = "block";
  add_category_page.style.display = "none";
});

add_category_btn.addEventListener("click", function () {
  add_item_page.style.display = "none";
  add_category_page.style.display = "block";
});

// Image Upload
let base64String = "";

function imageUploaded() {

  var file = document.querySelector("input[type=file]")["files"][0];

  var reader = new FileReader();

  reader.onload = function () {
    base64String = reader.result;
    base64String = `<img src="` + base64String + `">`;
  };

  reader.readAsDataURL(file);
}

// Send Request to Add an Item
add_item.addEventListener("click", function(event){
  event.preventDefault();
  
  let name = document.getElementById("item_name").value;
  let description = document.getElementById("item_desc").value;
  let location = document.getElementById("item_loc").value;
  let category = document.getElementById("categorylist").value;
  let item_price = document.getElementById("item_price").value;
  let in_stock = document.getElementById("item_in_stock").value;
  let item_stock_quantity = document.getElementById("item_stock_quantity").value;
  let image = imageUploaded();

  let data = new FormData();
  data.append("name", name);
  data.append("description", description);
  data.append("location", location);
  data.append("category", category);
  data.append("price", item_price);
  data.append("image", base64String);
  data.append("item_stock_quantity", item_stock_quantity);
  data.append("in_stock", in_stock);

  let url = "http://localhost:8000/api/v1/Admin/AddItem";

  axios({
    method: "POST",
    url: url,
    data: data,
    headers: {
      "Content-Type": "form-data",
    },
  }).then(function (response) {
    if (response.data.status === "Success") {
      let parent = document.getElementById("createitem");
      let message = document.createElement("div");
      message.classList.add("message");
      message.classList.add("success");
      message.innerText = "Item Added Successfully";
      parent.append(message);
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    } else {
      let parent = document.getElementById("createitem");
      let message = document.createElement("div");
      message.classList.add("message");
      message.classList.add("failed");
      message.innerText = "Failed to Add Item";
      parent.append(message);
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    }
  });
})


add_category.addEventListener("click", function(){
  let category_name = document.getElementById("category_name").value;
  let url = "http://localhost:8000/api/v1/Admin/AddCategory";
  let data = new FormData();
    data.append("name", category_name)
  axios({
    method: "POST",
    data: data,
    url: url,
  }).then(function (response) {
    if (response.data.status === "Success") {
      let parent = document.getElementById("wrapper");
      let message = document.createElement("div");
      message.classList.add("message");
      message.classList.add("success");
      message.innerText = "Item Added Successfully";
      parent.append(message);
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    } else {
      let parent = document.getElementById("wrapper");
      let message = document.createElement("div");
      message.classList.add("message");
      message.classList.add("failed");
      message.innerText = "Failed to Add Item";
      parent.append(message);
      setTimeout(() => {
        message.style.display = "none";
      }, 2000);
    }
  })
})

let admin_name = document.getElementById("admin");
let admin_name_localstorage = localStorage.getItem("Admin's name");

admin_name.innerText = "Welcome" + admin_name_localstorage;