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
        const artArray = [],
            javascript = [],
            bootstrap = [],
            technology = [],
            jquery = [],
            node = [];
        artArray.push(javascript, bootstrap, technology, jquery, node);
        javascript.push(response.data.articles.javascript);
        bootstrap.push(response.data.articles.bootstrap);
        technology.push(response.data.articles.technology);
        jquery.push(response.data.articles.jquery);
        node.push(response.data.articles.node);
        console.log(javascript[0][0].headline);
        // console.log(artArray);
        artArray.forEach((value, index, array) => {
            const allArrays = value[0];
            allArrays.forEach((theActualInfomation, i, a) => {
                console.log(theActualInfomation);

                //function creation
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
                    card.append(headline, author, imgContainer, img, byName);
                    //dont forget to return the function!!!!
                    return card;
                }
                console.log(cardMaker(theActualInfomation));
                attachCardsHere.append(cardMaker(theActualInfomation));
            });
        });

        // function articleToCard(array) {
        //     array.forEach((element, index, array) => {
        //         console.log(element[index], index);
        //     });
        // }
        // articleToCard(artArray);
    });
