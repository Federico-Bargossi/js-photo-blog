let cards = {};
let cardItem = "";
const rowElem = document.querySelector(".row");
const chiudiButt = document.getElementById("chiudi");
const overlayElem = document.querySelector(".overlay");
const overlayCont = document.querySelector(".overlay-content");




const renderCard = () => {
    axios
        .get(`https://jsonplaceholder.typicode.com/photos?_limit=6`)
        .then(resp => {
            cards = resp.data;
            console.log(cards);
            cards.forEach((cards) => {
                const cureCardTitle = cards.title;
                const cureCardUrl = cards.url;
                const cureCardId = cards.id;
                const card = `
        <div class="col">
                    <div class="card-container" data-post-id="${cureCardId}">
                        <img src="./assets_day1/img/pin.svg" class="svg" alt="">
                        <img src="${cureCardUrl}" class="card-image" alt="">
                        <p>${cureCardTitle}</p>
                    </div>
                </div>
        `
                cardItem += card;
            })
            rowElem.innerHTML = cardItem;


            addShow();


        })
}

//per inserire overlay
const addShow = () => {
    let imgoverlay = "";
    const cards2 = document.querySelectorAll(".card-container");
    cards2.forEach((cards) => {
        cards.addEventListener("click", () => {
            const cardImage = cards.querySelector(".card-image").src;
            imgoverlay = `
            <button id="chiudi" >Chiudi</button>
            <img src="${cardImage}" alt="">
        </div>
            `
            overlayCont.innerHTML = imgoverlay;
            overlayElem.classList.add("show");
            console.log(cards);

            document.getElementById("chiudi").addEventListener("click", () => {
                overlayElem.classList.remove("show");
            })
        })
    })
}

renderCard();
