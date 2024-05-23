function scrollOnClick() {
  document.getElementById("content").scrollIntoView({ behavior: "smooth" });
}

function scrollStory() {
  document.getElementById("my-story").scrollIntoView({ behavior: "smooth" });
}

function scrollProjects() {
  document.getElementById("my-projects").scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 75;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();

var visible = false;
var on = false;
var ctr = 0;
var running = false;
setInterval(function () {
  typewriter("Cornell University, my alma mater.", 75);
}, 500);

function typewriter(txt, speed, iter = 0) {
  if (visible) {
    return;
  }
  var tw = document.getElementById("typewrite");
  var windowHeight = window.innerHeight;
  var elementTop = tw.getBoundingClientRect().top;
  var elementVisible = 50;
  if (elementTop < windowHeight - elementVisible) {
    visible = true;
    typewriter_actual(txt, speed, iter);
  }
}

function typewriter_actual(txt, speed, iter = 0) {
  var tw = document.getElementById("typewrite");
  if (iter < txt.length - 1) {
    tw.innerHTML = tw.innerHTML.slice(0, -1) + txt.charAt(iter) + "█";
    setTimeout(function () {
      typewriter_actual(txt, speed, iter + 1);
    }, speed);
  } else if (iter == txt.length - 1) {
    tw.innerHTML = tw.innerHTML.slice(0, -1) + txt.charAt(iter);
    caret();
    setTimeout(function () {
      typewriter_actual(txt, speed, iter + 1);
    }, speed);
  } else {
    tw.innerHTML = tw.innerHTML;
  }
}

function caret() {
  if (running) {
    return;
  }
  running = true;
  actual_caret();
}

function actual_caret() {
  if (ctr >= 10) {
    running = false;
    return;
  }
  tw = document.getElementById("caret");
  tw.style.width = "1ch";
  ctr++;
  if (on) {
    tw.innerHTML = "";
  } else {
    tw.innerHTML = "█";
  }
  on = !on;
  setTimeout(function () {
    actual_caret();
  }, 500);
}

function hoverCaption() {
  if (ctr >= 10) {
    ctr = 0;
    caret();
  }
}

var resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

rand = randInt(1, 3);
document.querySelector(".right-pane").style.backgroundImage =
  "url('/images/bg/" + rand + ".png')";

function splashOnMobile(x) {
  if (x.matches) {
    document.querySelector(".button-bg").style.backgroundImage =
      "url('/images/bg/" + rand + ".png')";
  } else {
    document.querySelector(".button-bg").style.backgroundImage = "none";
  }
}

var x = window.matchMedia("(max-width: 800px)");
splashOnMobile(x);
x.addListener(splashOnMobile);
