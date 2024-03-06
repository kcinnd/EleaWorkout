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

    const workoutDetails = document.getElementById('workout-details');
    workoutDetails.innerHTML = ''; // Clear existing workout details

    if (day === 1) {
        // Add Day 1 workout details
        const workoutHTML = `
            <div class="workout-title">Day 1: Legs (Quad Dominant + Abs)</div>
            <div class="workout-section">
                <div class="workout-section-title">Main Lift</div>
                <ul>
                    <li class="workout-item">Back Squats (4 sets of 4-6 reps)</li>
                </ul>
            </div>
            <div class="workout-section">
                <div class="workout-section-title">Superset 1</div>
                <ul>
                    <li class="workout-item">Bulgarian Split Squats (3 sets of 8-10 reps each leg)</li>
                    <li class="workout-item">Goblet Squats (3 sets of 12 reps)</li>
                </ul>
            </div>
            <div class="workout-section">
                <div class="workout-section-title">Superset 2</div>
                <ul>
                    <li class="workout-item">Leg Press (3 sets of 10-12 reps)</li>
                    <li class="workout-item">Front Squats (3 sets of 6-8 reps)</li>
                </ul>
            </div>
            <div class="workout-section">
                <div class="workout-section-title">Superset 3</div>
                <ul>
                    <li class="workout-item">Leg Extensions (3 sets of 12-15 reps)</li>
                    <li class="workout-item">Hanging Leg Raises (3 sets of 10-15 reps)</li>
                </ul>
            </div>
        `;
        workoutDetails.innerHTML = workoutHTML;
    }
    // Corrected: This closing bracket ends the selectDay function
}
