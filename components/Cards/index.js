// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const attachCardsHere = document.querySelector(".cards-container");
//axios start

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        console.log(response);
        // console.log(response.data.articles);

        //make an array for each different topic.
        const artArray = [],
            javascript = [],
            bootstrap = [],
            technology = [],
            jquery = [],
            node = [];
        //push all the subArrays into the main array.
        artArray.push(javascript, bootstrap, technology, jquery, node);
        //then gather the information for each topic.
        javascript.push(response.data.articles.javascript);
        bootstrap.push(response.data.articles.bootstrap);
        technology.push(response.data.articles.technology);
        jquery.push(response.data.articles.jquery);
        node.push(response.data.articles.node);
        //check where I can retrieve the information
        // console.log(javascript[0][0].headline);
        // console.log(artArray);

        //forEach item in the array, i want to get the actual information I need for each array
        artArray.forEach(value => {
            const allArrays = value[0];
            allArrays.forEach((theActualInfomation, i, a) => {
                // console.log(theActualInfomation);

                //function creation for each tile.
                function cardMaker(data) {
                    const card = document.createElement("div"),
                        headline = document.createElement("div"),
                        author = document.createElement("div"),
                        imgContainer = document.createElement("div"),
                        img = document.createElement("img"),
                        byName = document.createElement("span");
                    //classes
                    card.classList.add("card");
                    headline.classList.add("headline");
                    author.classList.add("author");
                    imgContainer.classList.add("img-container");
                    //textContent
                    headline.textContent = data.headline;
                    img.src = data.authorPhoto;
                    byName.textContent = `By ${data.authorName}`;
                    //attaching
                    card.append(headline, author);
                    author.append(imgContainer, byName);
                    imgContainer.append(img);
                    //dont forget to return the function!!!!
                    return card;
                }
                console.log(cardMaker(theActualInfomation));
                attachCardsHere.append(cardMaker(theActualInfomation));
            });
        });
    });
