const navSlide = () => {
  const navButton = document.querySelector(".nav-button");
  const nav = document.querySelector(".nav-links");

  navButton.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
};
var prev = 0;
var $window = $(window);
var nav = $("nav");

$window.on("scroll", function () {
  var scrolltop = $window.scrollTop();
  nav.toggleClass("nav-hidden", scrolltop < prev);
  prev = scrolltop;
  if (prev === 0) {
    nav.removeClass("nav-hidden");
  }
});
$(".fullBackground").fullClip({
  images: ["images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"],
  transitionTime: 2000,
  wait: 5000,
});

navSlide();
