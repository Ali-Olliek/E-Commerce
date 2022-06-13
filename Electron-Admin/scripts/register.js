let register = document.getElementById("register");
register.addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;

    let data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("password_confirmation", confirmpassword);

    let url = "http://localhost:8000/api/v1/Admin/CreateAdmin";

    axios({
        method: "POST",
        url: url,
        data: data,
    }).then(function (response) {
        console.log(response);
        if (response.data.message === "Admin successfully registered"){
             window.location.href="./admin.html"
        }else{
            let parent = document.getElementById("login");
            let message = document.createElement("div");
            message.classList.add("message");
            message.classList.add("success");
            message.innerText = "Couldn't Create Admin";
            parent.append(message);
            setTimeout(() => {
              message.style.display = "none";
            }, 2000);
        }
    })
});
