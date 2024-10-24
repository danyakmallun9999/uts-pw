document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".logo",
    opacity: [0, 1],
    translateX: ["100%", "0%"],
    duration: 1000,
    easing: "easeInOutQuad",
  });
});

document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".hero-text",
    opacity: [0, 1],
    translateX: ["-100%", "0%"],
    duration: 1000,
    easing: "easeInOutQuad",
  });
});
