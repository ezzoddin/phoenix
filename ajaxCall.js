//GET REQUEST

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        console.log(xhttp.responseText);
    }
};
xhttp.open("GET", "http://mezz.ir/phoenix/api/App/read.php", true);
xhttp.send();
