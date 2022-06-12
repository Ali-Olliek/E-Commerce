const add_item_page = document.getElementById("createitem");
const add_category_page = document.getElementById("category");
const add_item_btn = document.getElementById("additem");
const add_category_btn = document.getElementById("addcat");



window.onload = function () {
  add_item_page.style.display = "block";
  add_category_page.style.display = "none";
};

add_category_btn.addEventListener("click", function () {
  add_item_page.style.display = "none";
  add_category_page.style.display = "block";
});

