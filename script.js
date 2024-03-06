// Initial setup: select the first tab by default
document.addEventListener('DOMContentLoaded', function() {
    changeTab(1);
});

function changeTab(selectedWeek) {
    // Update tabs' active state
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        if (index === selectedWeek - 1) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Clear existing day buttons
    const daysContainer = document.getElementById('days-container');
    daysContainer.innerHTML = '';

    // Add new day buttons for the selected week
    for (let i = 1; i <= 5; i++) {
        const dayButton = document.createElement('button');
        dayButton.textContent = `Day ${i}`;
        dayButton.classList.add('day-button');
        dayButton.onclick = () => selectDay(i);
        daysContainer.appendChild(dayButton);
    }
}

function selectDay(day) {
    // Update day buttons' active state
    const dayButtons = document.querySelectorAll('.day-button');
    dayButtons.forEach((button, index) => {
        if (index === day - 1) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Here you can add functionality to display the workout for the selected day
    console.log(`Workout for Day ${day} selected`);
}
