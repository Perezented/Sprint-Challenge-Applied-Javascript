// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

//getting where I want to append all this now
const attachHeaderHere = document.querySelector(".header-container");

function Header() {
    //creating elements
    const header = document.createElement("div"),
        date = document.createElement("span"),
        heading1 = document.createElement("h1"),
        temp = document.createElement("span");
    //adding classes
    header.classList.add("header");
    date.classList.add("date");
    temp.classList.add("temp");
    //textContent
    date.textContent = "SMARCH 28, 2019";
    heading1.textContent = "Lambda Times";
    temp.textContent = "98°";
    //glueing them together
    header.append(date, heading1, temp);
    //attach to document
    attachHeaderHere.append(header);
    console.log(header);
    return Header;
}
Header();
