// DOM Elements
const stepGoalInput = document.getElementById('stepGoal');
const currentStepsInput = document.getElementById('currentSteps');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const timerDisplay = document.getElementById('timerDisplay');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const stepCalcForm = document.getElementById('stepCalcForm');
const stepResult = document.getElementById('stepResult');
const modal = document.getElementById('stepTrackerModal');

// Tracking Variables
let timer;
let seconds = 0;
let isTracking = false;

// Update Progress Bar
function updateProgress() {
    const goal = parseInt(stepGoalInput.value) || 10000;
    const steps = parseInt(currentStepsInput.value) || 0;
    const percentage = Math.min((steps / goal) * 100, 100);
    
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${steps} / ${goal} steps`;
}

// Format Time (seconds to MM:SS)
function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Start/Stop Tracking
function toggleTracking() {
    if (isTracking) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start Tracking';
        isTracking = false;
    } else {
        timer = setInterval(() => {
            seconds++;
            timerDisplay.textContent = `Duration: ${formatTime(seconds)}`;
        }, 1000);
        startStopBtn.textContent = 'Stop Tracking';
        isTracking = true;
    }
}

// Reset Tracker
function resetTracker() {
    clearInterval(timer);
    seconds = 0;
    currentStepsInput.value = '0';
    timerDisplay.textContent = 'Duration: 0:00';
    startStopBtn.textContent = 'Start Tracking';
    isTracking = false;
    updateProgress();
}

// Calculate Estimated Steps
function calculateSteps(e) {
    e.preventDefault();
    const height = parseFloat(document.getElementById('heightInput').value);
    const minutes = parseFloat(document.getElementById('timeInput').value);
    
    if (height && minutes) {
        // Average step length formula: height in cm * 0.415
        const stepLength = height * 0.415 / 100; // Convert to meters
        // Average walking speed: 1.4 m/s
        const distance = 1.4 * (minutes * 60); // meters = speed * seconds
        const steps = Math.round(distance / stepLength);
        stepResult.textContent = `Estimated Steps: ${steps}`;
    }
}

// Modal Functions
function openStepTracker() {
    modal.style.display = 'block';
    resetTracker(); // Initialize fresh state when opened
}

function closeModal() {
    modal.style.display = 'none';
    resetTracker(); // Reset when closed
}

// Event Listeners
startStopBtn.addEventListener('click', toggleTracking);
resetBtn.addEventListener('click', resetTracker);
stepCalcForm.addEventListener('submit', calculateSteps);
stepGoalInput.addEventListener('input', updateProgress);
currentStepsInput.addEventListener('input', updateProgress);

// Initialize
updateProgress();

// Make open function available globally
window.openStepTracker = openStepTracker;
window.closeModal = closeModal;