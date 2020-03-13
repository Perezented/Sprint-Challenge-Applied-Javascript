// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
    .get("https://lambda-times-backend.herokuapp.com/topics")
    .then(response => {
        // console.log(response);
        // console.log(response.data.topics);

        //store main item needed.
        const techData = response.data.topics;
        //find the attachment point.
        const attachTabsHere = document.querySelector(".tabs");

        //for each topic, attach it to the div.tabs
        techData.forEach(value => {
            //make element
            const tab = document.createElement("div");
            // console.log(value);

            //add class and text
            tab.classList.add("tabs");
            tab.textContent = value;
            // console.log(tab);
            attachTabsHere.append(tab);
        });
    })
    .catch(error => {
        console.log(ERRRRRRRRRPPPOPKTKRRRRRRRSSSSSSS, error);
    });
