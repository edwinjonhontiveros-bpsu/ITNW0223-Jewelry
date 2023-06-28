// specifically for jewelryData.xml

function load() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      disp(this);
    }
  };
  xhttp.open("GET", "jewelryData.xml", true);
  xhttp.send();
}

function disp(xml) {
  var xmlDoc = xml.responseXML;
  var records = xmlDoc.getElementsByTagName("jewelry");
  var out = "";
  for (var i = 0; i < records.length; i++) {
    var name = records[i].getElementsByTagName("name")[0].textContent;
    var price = records[i].getElementsByTagName("price")[0].textContent;
    var desc = records[i].getElementsByTagName("desc")[0].textContent;
    var currency = "₱";

    out += "<div class='recordDetails'>" + 
      "<h2>Name</h2>" +
        "<p>" + name + "</p>" +
      "<h2>Price</h2>" +
        "<p>" + currency + price + "</p>" +
      "<h2>Description</h2>" + 
        "<p>" + desc + "</p>" +
    "</div>";
  }

  out += "<div class='recordDetails'>" + 
    "<p><b>" +
      "For more information, head over to one of our branches or call us at " +
      "047-092-BHEM for assistance." +
    "</b></p>" +
  "</div>";

  document.getElementById("showJewelries").style.display = "block";
  document.getElementById("showJewelries").innerHTML = out;
}