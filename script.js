document.addEventListener('DOMContentLoaded', function() {
    changeTab(1);
});

function changeTab(selectedWeek) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        if (index === selectedWeek - 1) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    const daysContainer = document.getElementById('days-container');
    daysContainer.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        const dayButton = document.createElement('button');
        dayButton.textContent = `Day ${i}`;
        dayButton.classList.add('day-button');
        dayButton.onclick = () => selectDay(i);
        daysContainer.appendChild(dayButton);
    }
}

function selectDay(day) {
    const dayButtons = document.querySelectorAll('.day-button');
    dayButtons.forEach((button, index) => {
        if (index === day - 1) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    const workoutDetails = document.getElementById('workout-details');
    workoutDetails.innerHTML = '';

    let workoutHTML = '';

    switch (day) {
        case 1:
            workoutHTML = `
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
            break;

        case 2:
            workoutHTML = `
                <div class="workout-title">Day 2: Push (Chest, Shoulders, Triceps)</div>
                <div class="workout-section">
                    <div class="workout-section-title">Main Lift</div>
                    <ul>
                        <li class="workout-item">Bench Press (4 sets of 4-6 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 1</div>
                    <ul>
                        <li class="workout-item">Incline Dumbbell Press (3 sets of 8-10 reps)</li>
                        <li class="workout-item">Dumbbell Flyes (3 sets of 12 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 2</div>
                    <ul>
                        <li class="workout-item">Push-Ups (3 sets to failure)</li>
                        <li class="workout-item">Cable Crossover (3 sets of 10-12 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Tri-set</div>
                    <ul>
                        <li class="workout-item">Dumbbell Shoulder Press (3 sets of 8-10 reps)</li>
                        <li class="workout-item">Lateral Raises (3 sets of 12-15 reps)</li>
                        <li class="workout-item">Tricep Dips (3 sets to failure)</li>
                    </ul>
                </div>
            `;
            break;

        case 3:
            workoutHTML = `
                <div class="workout-title">Day 3: Pull (Back, Biceps)</div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 1</div>
                    <ul>
                        <li class="workout-item">Pull-Ups (3 sets to failure)</li>
                        <li class="workout-item">Bent Over Rows (3 sets of 8-10 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 2</div>
                    <ul>
                        <li class="workout-item">Single-Arm Dumbbell Rows (3 sets of 10-12 reps each side)</li>
                        <li class="workout-item">Face Pulls (3 sets of 12-15 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 3</div>
                    <ul>
                        <li class="workout-item">Hammer Curls (3 sets of 10-12 reps)</li>
                        <li class="workout-item">Barbell Curls (3 sets of 8-10 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 4</div>
                    <ul>
                        <li class="workout-item">Cable Row (3 sets of 15 reps)</li>
                        <li class="workout-item">Cable Curls (3 sets of 20 reps)</li>
                    </ul>
                </div>
            `;
            break;
            
        case 4:
            workoutHTML = `
                <div class="workout-title">Day 4: Legs (Hamstring & Glute Dominant)</div>
                <div class="workout-section">
                    <div class="workout-section-title">Main Lift</div>
                    <ul>
                        <li class="workout-item">Deadlifts (4 sets of 4-6 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 1</div>
                    <ul>
                        <li class="workout-item">Barbell Hip Thrusts (3 sets of 8-10 reps)</li>
                        <li class="workout-item">Walking Lunges (3 sets of 12 reps each leg)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 2</div>
                    <ul>
                        <li class="workout-item">Romanian Deadlifts (3 sets of 8-10 reps)</li>
                        <li class="workout-item">Good Mornings (3 sets of 10-12 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 3</div>
                    <ul>
                        <li class="workout-item">Leg Curls (3 sets of 12-15 reps)</li>
                        <li class="workout-item">Calf Raises (3 sets of 15-20 reps)</li>
                    </ul>
                </div>
            `;
            break;
        case 5:
            workoutHTML = `
                <div class="workout-title">Day 5: Arms & Shoulders + Abs</div>
                <div class="workout-section">
                    <div class="workout-section-title">Main Lift</div>
                    <ul>
                        <li class="workout-item">Overhead Press (4 sets of 4-6 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 1</div>
                    <ul>
                        <li class="workout-item">Skull Crushers (3 sets of 8-10 reps)</li>
                        <li class="workout-item">EZ Bar Curl (3 sets of 8-10 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 2</div>
                    <ul>
                        <li class="workout-item">Arnold Press (3 sets of 8-10 reps)</li>
                        <li class="workout-item">Reverse Flyes (3 sets of 12-15 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Superset 3</div>
                    <ul>
                        <li class="workout-item">Concentration Curls (3 sets of 10-12 reps each arm)</li>
                        <li class="workout-item">Tricep Overhead Extension (3 sets of 10-12 reps)</li>
                    </ul>
                </div>
                <div class="workout-section">
                    <div class="workout-section-title">Ab Circuit</div>
                    <ul>
                        <li class="workout-item">Planks (3 sets of 1 min hold)</li>
                        <li class="workout-item">Russian Twists (3 sets of 15 reps each side)</li>
                        <li class="workout-item">Ab Wheel Rollouts (3 sets of 10-12 reps)</li>
                    </ul>
                </div>
            `;
            break;
    }

    workoutDetails.innerHTML = workoutHTML;
}
