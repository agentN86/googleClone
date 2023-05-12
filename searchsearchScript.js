var input = document.getElementById("searchField")

input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {

    event.preventDefault()

    document.getElementById("searchBTN").click()
  }
})

document.getElementById("searchBTN").onclick = function() {
     window.location.href = "search.html?q=" + input.value
}