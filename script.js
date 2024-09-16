let homeDom = document.getElementsByTagName("a")[0];
let aboutDom = document.getElementsByTagName("a")[1];
let contactDom = document.getElementsByTagName("a")[2];

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
  fetchPage("home.html");

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
  if (typeof filename != "string") return

  fetch(filename).then((result) => {

    return result.text();
  }).then((data) =>
    contentDom.innerHTML = data).catch((e) => {
      alert("blev kaos ", e)
    })
}