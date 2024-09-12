let rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (event) {
  // basically getBoundingClientReact give X and Y coordinate from window it also give us a width and heieght of rectangle;
  var rectangleLocationFromWindow = rect.getBoundingClientRect();

  var pointerLocationFromWindow = event.clientX;
  // we write .left here because we want rectangle left Location points From Window;
  var pointerLocationFromrectangle =
    pointerLocationFromWindow - rectangleLocationFromWindow.left;
     //   gsap maprange syntax will understand on its website(search gsap maprange)
    //  the maximum intensity pf any color is 255
  if (
    pointerLocationFromrectangle < rectangleLocationFromWindow.width / 2 ) {
        var redcolor = gsap.utils.mapRange(
            0,rectangleLocationFromWindow.width / 2,255,0, pointerLocationFromrectangle);
            gsap.to(rect, {
                backgroundColor: `rgb(${redcolor},0,0)`,
                ease: Power4,
            })
  
  } else {
    var bluecolor = gsap.utils.mapRange(
        rectangleLocationFromWindow.width / 2,rectangleLocationFromWindow.width,0,255, pointerLocationFromrectangle);
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        })
  }
});

rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
    })

});