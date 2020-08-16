
// Navigation
var dropbtn = $(`.dropbtn`);
dropbtn.on('click', dropDown);

function dropDown() {
  console.log("clicked!");
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

var citizensButton = $('.citizens-button');
var citizensContainer = $('.citizens-container');

var environmentalButton = $(`.environmental-button`);
var environmentalContainer = $(`.environmental-container`);

var standButton = $(`.stand-button`);
var standContainer = $(`.stand-container`);

var sierraButton = $(`.sierra-button`);
var sierraContainer = $(`.sierra-container`);

var earthworksButton = $(`.earthworks-button`);
var earthworksContainer = $(`.earthworks-container`);

var homeButton = $(`.home-button`);
var homeContainer = $(`.home-container`);

var communityButton = $(`.community-button`);
var communityContainer = $(`.community-container`);

citizensButton.on('click', citizensInfo);
function citizensInfo() {
  citizensContainer.toggleClass('clicked');
};

environmentalButton.on('click', environmentalInfo);
function environmentalInfo(){
  environmentalContainer.toggleClass('clicked');
}

standButton.on('click', standInfo);
function standInfo(){
  standContainer.toggleClass('clicked');
}

sierraButton.on('click', sierraInfo);
function sierraInfo(){
  sierraContainer.toggleClass('clicked');
}

earthworksButton.on('click', earthworksInfo);
function earthworksInfo(){
  earthworksContainer.toggleClass('clicked');
}

homeButton.on('click', homeInfo);
function homeInfo(){
  homeContainer.toggleClass('clicked');
}

communityButton.on('click', communityInfo);
function communityInfo(){
  communityContainer.toggleClass('clicked');
}

function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
