function generateHTML(data) {
  var source = document.getElementById("repos-template").innerHTML;
  var template = Handlebars.compile(source);
  var context = { repos: data };
  var html = template(context);
  document.querySelector("body").insertAdjacentHTML("afterbegin", html);
}

fetch(`https://api.github.com/users/JGrant024/repos`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    generateHTML(data);
  });
