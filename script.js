// Header
const body=document.querySelector("body");
const navbar=document.querySelector(".navbar");
const menu=document.querySelector(".menu-list");
const menuBtn=document.querySelector(".menu-btn");
const cancelBtn=document.querySelector(".cancel-btn");
menuBtn.onclick=()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick =()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}
window.onscroll =()=>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Swiper
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

function getSlidesPerView() {
    let windowWidth = window.innerWidth;
    return windowWidth <= 450 ? 2 : 3;
  }

  window.addEventListener("resize", function () {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
  });

// FAQ
document.addEventListener("DOMContentLoaded", function() {
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
        question.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

function getRandomNumber() {
    return Math.floor(Math.random() * 2) + 1;
}
function redirectToHTMLFile() {
    const randomNumber = getRandomNumber();
    if (randomNumber === 1) {
        window.location.href = "microphones.html";
    } else {
        window.location.href = "videocameras.html";
    }
}
document.getElementById("shop-p").onclick = function() {
    redirectToHTMLFile();
};

document.getElementById("categories-img1").onclick=function(){
    window.location.href="microphones.html";
}
document.getElementById("categories-img2").onclick=function(){
    window.location.href="videocameras.html";
}