var eventcontext = {
  sportTitles: "NFL London Games 2022",
  specialTitles: "Country to Country",
  musicTitles: "Florence + the Machine",
  artsTitles: "Tenille Arts",
  miscTitles: "Jackson Wang",
};

function clicksports() {
  var sportsElement = document.getElementById("sports");

  sportsElement.innerHTML = `${eventcontext.sportTitles}`;
}

function clickspcial() {
  var specialElement = document.getElementById("special");
  specialElement.innerHTML = `${eventcontext.specialTitles}`;
}

function clickmusic() {
  var musicElement = document.getElementById("music");
  musicElement.innerHTML = `${eventcontext.musicTitles}`;
}

function clickarts() {
  var artsElement = document.getElementById("arts");
  artsElement.innerHTML = `${eventcontext.artsTitles}`;
}

function clickmisc() {
  var miscElement = document.getElementById("misc");
  miscElement.innerHTML = `${eventcontext.miscTitles}`;
}
//   // ADVANCED
//   // loop through the friends and append each one onto the correct element
//   var ulElement = document.getElementById("friends");
//   user.friends.forEach((friend) => {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(friend));
//     ulElement.appendChild(li);
//   });
