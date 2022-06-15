// Image Upload
// var base64String = "";

function categoryimageUploaded() {
  var file = document.querySelector("input[type=file]")["files"][0];

  var reader = new FileReader();

  reader.onload = function () {
    base64String = reader.result;
    base64String = `` + base64String + ``;
  };
  reader.readAsDataURL(file);
}

// // Page Sections
// const add_item_page = document.getElementById("createitem");
// const add_category_page = document.getElementById("category");

// // Side Bar Buttons to Toggle Section Display
// const add_item_btn = document.getElementById("additem");
// const add_category_btn = document.getElementById("addcat");

// // Submit Form Data
// const add_item = document.getElementById("submit-add-item");
// const add_category = document.getElementById("submit-add-category");

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
