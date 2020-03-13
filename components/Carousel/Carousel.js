/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const attachCarouselHere = document.querySelector(".carousel-container");
function scroller() {
    const leftBtn = document.createElement("div"),
        mtn = document.createElement("img"),
        comp = document.createElement("img"),
        trees = document.createElement("img"),
        turntable = document.createElement("img"),
        rightBtn = document.createElement("div"),
        carousel = document.createElement("div");
    mtn.src = "./assets/carousel/mountains.jpeg";
    comp.src = "./assets/carousel/computer.jpeg";
    treessrc = "./assets/carousel/trees.jpeg";
    turntable.src = "./assets/carousel/turntable.jpeg";
    carousel.append(leftBtn, mtn, comp, trees, turntable, rightBtn);

    return carousel;
}
attachCarouselHere(scroller());
