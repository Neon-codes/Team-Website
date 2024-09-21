var tl = gsap.timeline();
function textAnimation() {
  tl.from("a", {
    y: -150,
    stagger: 0.25,
    duration: 1,
    delay: 0.5,
    opacity: 0,
  });
  tl.from("svg", {
    x: -100,
    duration: 1,
    opacity: 0,
    ease: "EaseINOut",
    delay: 0.5,
  });
  tl.from(".right h1", {
    y: 150,
    stagger: 0.25,
    duration: 1,
    delay: 0.5,
    opacity: 0,
  });
  tl.from(".case-studies h1", {
    y: -200,
    stagger: 0.25,
    duration: 1,
    delay: 0.75,
    opacity: 0,
    ease: "EaseINOut",
  });
  tl.from(".placeholder", {
    x: 1500,
    duration: 1,
    ease: "EaseIn",
    stagger: 0.25,
    delay: -2.5,
  });
  tl.from(".info", {
    opacity: 0,
    y: 150,
    stagger: 0.25,
  });
  tl.from(".lists h1", {
    scale: 0,
    y: 250,
  });
  tl.from(".list", {
    opacity: 0,
    x: -250,
    stagger: 0.25,
  });
  tl.from(".years", {
    opacity: 0,
    scale: 0,
  });
  tl.from(".form", {
    scale: 0,
  });
  tl.from("footer", {
    x: 400,
    duration: 1,
    ease: "EaseIn",
    opacity: 0,
    delay: 1.5,
  });
}
textAnimation();