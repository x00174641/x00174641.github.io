const cards = document.querySelectorAll('.card');
let activeIndex = Math.floor(cards.length / 2);
cards[activeIndex].classList.add('active-card');

const updateActiveCard = (newIndex) => {
    cards[activeIndex].classList.remove('active-card');
    activeIndex = newIndex;
    cards[activeIndex].classList.add('active-card');
};

document.getElementById('nextButton').addEventListener('click', () => {
    if (activeIndex < cards.length - 1) {
        updateActiveCard(activeIndex + 1);
        document.getElementById('prevButton').style.background = '#fba056'
    } 
    if (cards.length -1  == activeIndex) {
        document.getElementById('nextButton').style.background = '#ccc'
    }
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (activeIndex > 0) {
        updateActiveCard(activeIndex - 1);
        document.getElementById('nextButton').style.background = '#fba056'
    }
    if (activeIndex == 0) {
        document.getElementById('prevButton').style.background = '#ccc'
    }
});
