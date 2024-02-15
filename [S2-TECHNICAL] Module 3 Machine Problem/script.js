let box = document.getElementById('box');
let initialTransitionDuration;

function showBox(day) {
    // Hide box if it's currently visible
    if (!box.classList.contains('hidden')) {
        box.style.transform = 'translate(-50%, -200%)'; // Reset position
        setTimeout(() => {
            box.style.transitionDuration = initialTransitionDuration; // Restore initial transition duration
            box.classList.add('hidden');
            box.offsetHeight; // Trigger reflow to reset transition
            box.style.transitionDuration = ''; // Remove inline transition duration
        }, 1000); // Adjust timing to match the transition duration
    }
    
    // Show box
    box.textContent = day;
    box.classList.remove('hidden');
    
    // Get initial transition duration
    if (!initialTransitionDuration) {
        initialTransitionDuration = getComputedStyle(box).transitionDuration;
    }
    
    // Move down with animation
    setTimeout(() => {
        box.style.transform = 'translate(-50%, 50%)'; // End position (lower)
    }, 100);
    
    // Change color based on the day after a delay
    let color;
    switch(day) {
        case 'Monday':
            color = '#3498db'; // Blue
            break;
        case 'Tuesday':
            color = '#2ecc71'; // Green
            break;
        case 'Wednesday':
            color = '#e74c3c'; // Red
            break;
        case 'Thursday':
            color = '#9b59b6'; // Purple
            break;
        case 'Friday':
            color = '#f1c40f'; // Yellow
            break;
        case 'Saturday':
            color = '#e67e22'; // Orange
            break;
        case 'Sunday':
            color = '#1abc9c'; // Turquoise
            break;
        default:
            color = '#3498db'; // Default to blue
    }
    
    // Change box color after a delay
    setTimeout(() => {
        box.style.backgroundColor = color;
    }, 500);
}
