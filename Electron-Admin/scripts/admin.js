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
function readFile() {
  if (!this.files || !this.files[0]) return;

  const FR = new FileReader();

  FR.addEventListener("load", function (evt) {
    document.querySelector("#img").src = evt.target.result;
    document.querySelector("#b64").textContent = evt.target.result;
  });

  FR.readAsDataURL(this.files[0]);
}
function readFile2() {
  if (!this.files || !this.files[0]) return;

  const FR = new FileReader();

  FR.addEventListener("load", function (evt) {
    document.querySelector("#img2").src = evt.target.result;
    document.querySelector("#b642").textContent = evt.target.result;
  });

  FR.readAsDataURL(this.files[0]);
}

document.querySelector("#itemImageId").addEventListener("change", readFile);
document.querySelector("#catImageId").addEventListener("change", readFile2);

// Send Request to Add an Item
add_item.addEventListener("click", function (event) {
  event.preventDefault();
  let name = document.getElementById("item_name").value;
  let location = document.getElementById("item_loc").value;
  let category = document.getElementById("categorylist").value;
  let item_price = document.getElementById("item_price").value;
  let description = document.getElementById("item_desc").value;
  let in_stock = document.getElementById("item_in_stock").value;
  let item_stock_quantity = document.getElementById("item_stock_quantity").value;

  let data = new FormData();
  data.append("name", name);
  data.append("price", item_price);
  data.append("category", category);
  data.append("location", location);
  data.append("in_stock", in_stock);
  data.append("image", base64String);
  data.append("description", description);
  data.append("item_stock_quantity", item_stock_quantity);

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
});

add_category.addEventListener("click", function (e) {
    e.preventDefault();
    let category_name = document.getElementById("category_name").value;
    let url = "http://localhost:8000/api/v1/Admin/AddCategory";

    let data = new FormData();

    data.append("name", category_name);
    data.append("image", base64String);

    axios({
        method: "POST",
        data: data,
        url: url,
        headers: {
          "Content-Type": "form-data",
        },
    }).then(function (response) {
        if (response.data.status === "Success") {
          console.log("success");
        } else {
          console.log("Failed");
        }
    });
});


let admin_name = document.getElementById("admin");
let admin_name_localstorage = localStorage.getItem("Admin's name");

admin_name.innerText = "Welcome, " + admin_name_localstorage;
