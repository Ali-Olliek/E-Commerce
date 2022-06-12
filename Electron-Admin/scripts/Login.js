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
    try {
      if (response.data.message === "Admin successfully registered")
        console.log("Admin successfully registered");
    } catch (err) {
      if (response.response.data.message === "SQLSTATE[23000]") {
        console.log("User Already Registered");
      }
    }
  });
});
