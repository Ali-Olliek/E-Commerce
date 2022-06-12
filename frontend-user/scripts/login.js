let login = document.getElementById("login");
    login.addEventListener("click", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let data = new FormData();
    data.append("email", email);
    data.append("password", password);

    let url = "http://localhost:8000/api/v1/User/Login";

    axios({
        method: "POST",
        url: url,
        data: data,
    }).then(function (response) {
        if (response.status == 200) {
        let user_token = response.data[0].original.access_token;
        let user_name = response.data.user;
        let credentials = [user_name, user_token ];
        localStorage.setItem("User",JSON.stringify(credentials))
        window.location.href = "./index.html"
        } else {
            console.log("User Not Found");
        }
    });
});
