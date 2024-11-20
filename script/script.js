let cards = {};
let cardItem = "";
const rowElem = document.querySelector(".row");

const renderCard = () => {
    axios
        .get(`https://jsonplaceholder.typicode.com/photos?_limit=6`)
        .then(resp => {
            cards = resp.data;
            console.log(cards);
            cards.forEach((cards) => {
                const cureCardTitle = cards.title;
                const cureCardUrl = cards.url;
                const card = `
        <div class="col">
                    <div class="card-container">
                        <img src="./assets_day1/img/pin.svg" class="svg" alt="">
                        <img src="${cureCardUrl}" alt="">
                        <p>${cureCardTitle}</p>
                    </div>
                </div>
        `
                cardItem += card;
            })
            rowElem.innerHTML = cardItem;

        })
}

renderCard();
