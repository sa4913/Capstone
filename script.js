
let iframeWrapper = document.getElementById("iframe-wrapper");
let actualIframe = document.getElementById("actual-iframe");
let iframeCloseButton = document.getElementById("close-iframe");

iframeCloseButton.addEventListener("click", closeIframe);

window.addEventListener("scroll", reveal);

function closeIframe(){
  iframeWrapper.style.display = "none";
}

function openIframe(page){
  iframeWrapper.style.display = "flex";
  actualIframe.src = page;
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
