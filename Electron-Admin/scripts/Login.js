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
        let admin_name = response.data.admin.name;
        localStorage.setItem("Admin's name", admin_name);
        window.location.href="./admin.html";
        } else {
        let parent = document.getElementById("wrapper");
        let message = document.createElement("div");
        message.classList.add("message");
        message.classList.add("failed");
        message.innerText = "User Not Found";
        parent.append(message);
        setTimeout(() => {
          message.style.display = "none";
        }, 2000);;
        }
    });
});
