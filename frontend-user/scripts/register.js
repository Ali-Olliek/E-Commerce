let register = document.getElementById("signup");
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

    let url = "http://localhost:8000/api/v1/User/Register";

    axios({
        method: "POST",
        url: url,
        data: data,
    }).then(function (response) {
        console.log(response);
        if (response.data.message === "User successfully registered") {
            window.location.href = "./login.html"
        } else {
            failed.style.display = "block";
        }
    });
});
