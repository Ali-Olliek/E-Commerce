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

// Send Request to Add an Item
add_item.addEventListener("click", function(event){
  event.preventDefault();
    let name = document.getElementById("item_name").value;
    let description = document.getElementById("item_desc").value;
    let location = document.getElementById("item_loc").value;
    let category = document.getElementById("categorylist").value;
    let item_price = document.getElementById("item_price");
    let in_stock = document.getElementById("item_in_stock").value;
    let item_stock_quantity = document.getElementById("item_stock_quantity").value;
    let image = document.getElementById("image").value;

    let data = new FormData();
      data.append("name", name);
      data.append("description", description);
      data.append("location", location);
      data.append("category", category);
      data.append("price", item_price);
      data.append("item_stock_quantity", item_stock_quantity); 
      data.append("in_stock", in_stock); 
      data.append("image", image);

    let url = "http://localhost:8000/api/v1/Admin/AddItem";

    axios({
      method : "POST",
      url : url,
      data : data,
      headers: {
        'Content-Type': 'form-data'
      }
    }).then(function(response){
      if(response.data.status === "success"){
        console.log("succes", response);
        message.innerHTML = "Item Added Successfully"
        message.classList.add = "succes";
        message.style.display = "block";
      }else{
        console.log("failed", response);
        message.innerHTML = "Failed To Add Item"
        message.classList.add = "failed";
        message.style.display = "block";
      }
    })
  })