// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
// const title = document.querySelector("title");

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        // console.log(response);
        // console.log(response.data.topics);
        const techData = response.data.topics;
        techData.forEach(value => {
            const attachTabsHere = document.querySelector(".tabs");
            const tab = document.createElement("div");
            // console.log(value);
            tab.classList.add("tabs");
            tab.textContent = value;
            // console.log(tab);
            attachTabsHere.append(tab);
            // document.querySelector(".tabs").style.display = "grid";
            // title.style.width = "100%";
        });
    })
    .catch(error => {
        console.log(ERRRRRRRRRPPPOPKTKRRRRRRRSSSSSSS, error);
    });
