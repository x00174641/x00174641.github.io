// Scrollspy
let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbarNavAltMarkup' })

// Portfolio Cards Select as Active
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

// Education Grades reading from JSON
let jsonData = {};
let currentYear = 'Year 3';

function getGrades(year) {
    currentYear = year; 
    const tableBody = document.getElementById('gradesTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    for ([course, grade] of Object.entries(jsonData[year])) {
        const row = tableBody.insertRow();
        const module = row.insertCell(0);
        const result = row.insertCell(1);
        module.textContent = course;
        result.textContent = grade;
    }
    document.getElementById('currentYearResults').innerHTML = currentYear
}

window.onload = () => {
    document.getElementById('nextYearBtn').style.background = '#ccc'
    fetch('json/grades.json').then(response => response.json())
    .then(data => {
        jsonData = data;
        getGrades('Year 3');
    })
};

function changeYear(increment) {
    const years = Object.keys(jsonData);
    let index = years.indexOf(currentYear);
    index += increment;

    if (index >= 0 && index < years.length) {
        getGrades(years[index]);
    }

    if (index == years.length-1) {
        document.getElementById('nextYearBtn').style.background = '#ccc'
    } else {
        document.getElementById('nextYearBtn').style.background = '#fba056'
    }

    if (index == 0) {
        document.getElementById('prevYearBtn').style.background = '#ccc'
    } else {
        document.getElementById('prevYearBtn').style.background = '#fba056'
    }
}
