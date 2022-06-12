let login = document.getElementById("login");
    login.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let data = new FormData();
    data.append("email", email);
    data.append("password", password);

    let url = "http://localhost:8000/api/v1/Admin/Login";

    axios({
        method: "POST",
        url: url,
        data: data,
    }).then(function (response) {
        if (response.data.status === "success") {
        window.location.href="./admin.html"
        } else {
        console.log("User Not Found");
        }
    });
});