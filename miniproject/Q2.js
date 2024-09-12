
window.addEventListener("mousemove", function (event) {

  var rect = document.querySelector("#rect");

  var xval = gsap.utils.mapRange(
    0,
    window.innerWidth,
    // out min '0' is for stopping rectangle in border of window in left side of window
  0,
    // out max '  window.innerWidth -  rect.getBoundingClientRect().width ' is for stopping rectangle in border of window in right side of window
    window.innerWidth -  rect.getBoundingClientRect().width ,
    event.clientX
  );
  //     gsap.to(): This is a GSAP function that animates an object to a new state. It's a shorthand way of saying "animate this object to these new properties".

  // "#rect": This is the target of the animation, which is the HTML element with the id "rect".

  // { left: xval }: This is an object that defines the new properties to animate to. In this case, it's only animating the left property of the element to the value of xval. This means that the element will move horizontally to the new left position.

  // ease: Power3: This specifies the easing function to use for the animation. Easing functions determine how the animation accelerates and decelerates. In this case, Power3 is a cubic easing function that starts slowly, accelerates quickly, and then decelerates slowly. This creates a smooth and natural-looking animation.

  gsap.to("#rect", {
    left: xval,
    ease: Power3,
  });
});
