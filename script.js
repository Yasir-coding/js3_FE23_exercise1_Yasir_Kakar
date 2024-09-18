let homeDom = document.getElementsByTagName("a")[0];
let aboutDom = document.getElementsByTagName("a")[1];
let contactDom = document.getElementsByTagName("a")[2];


const log = document.querySelector(".event-log-contents");
const reload = document.querySelector("#reload");



window.addEventListener("popstate", () => {
  switch (history.state.page) {
    case 0:
      fetchPage("home.html")
      break
    case 1:
      fetchPage("about.html")
      break
    case 2:
      fetchPage("contact.html")
      break
  }

})

homeDom.addEventListener("click", () => {
  history.pushState({ page: 0 }, "", "/home");
  setTimeout(() => {

    fetchPage("home.html");
  }, 2000);
  window.addEventListener("load", (event) => {
    console.log("lsdfm");

  })
})

aboutDom.addEventListener("click", () => {
  history.pushState({ page: 1 }, "", "/about");
  fetchPage("about.html");

})

contactDom.addEventListener("click", () => {
  history.pushState({ page: 2 }, "", "/contact");
  fetchPage("contact.html");

})

let contentDom = document.getElementById("content");

function fetchPage(filename) {
  document.querySelector("#loader").style.display = "none";

  if (typeof filename != "string") return

  fetch(filename).then((result) => {

    return result.text();
  }).then((data) =>
    contentDom.innerHTML = data)
    .catch((e) => {
      if (e) {
        document.querySelector("#loader").style.display = "block";

      } else if (!e) {
        document.querySelector("#loader").style.display = "none";

      }
    })
}


// function fetchHtml(filename) {
//   fetch(`./${filename}.txt`)
//     .then((response) => {
//       return response.text()
//     })
//     .then((html) => {
//       content.innerHTML = html
//     })
// }
