let url = "http://localhost:8000/api/v1/Items/AllItems";

window.addEventListener('load', (event) => {
  axios({
    method: "GET",
    url: url,
    headers: new Headers({
      'Authorization': 'Bearer' + localStorage.getItem('user_token')
    })
  }).then(function (response) {
    console.log(response);
  });
});
