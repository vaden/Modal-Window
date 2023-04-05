// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  fadeIn(modal);
  btn.style.display = "none";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  fadeOut(modal);
  btn.style.display = "inline-block";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    fadeOut(modal)
    btn.style.display = "inline-block";
  }
};

// When the user presses the Escape key, close the modal
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.code == "Escape") {
    fadeOut(modal)
    btn.style.display = "inline-block";
  }
};

// Fade out function
function fadeOut(element) {
  let opacity = 1;
  const interval = setInterval(() => {
    if (opacity <= 0) {
      clearInterval(interval);
      element.style.display = "none";
    } else {
      element.style.opacity = opacity;
      opacity -= 0.1;
    }
  }, 50);
}

// Fade in function
function fadeIn(element) {
  let opacity = 0;
  const interval = setInterval(() => {
      element.style.display = "block";
      if (opacity >= 1) {
          clearInterval(interval);
    } else {
      element.style.opacity = opacity;
      opacity += 0.1;
    }
  }, 50);
}
