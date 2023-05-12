var url_string = (window.location.href)
var url = new URL(url_string)
var query = url.searchParams.get("q")

document.getElementById("searchField").value = query
document.getElementById("bold").innerText = query