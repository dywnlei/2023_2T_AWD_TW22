let box = document.getElementById('box');
let initialTransitionDuration;

function showBox(day) {
    if (!box.classList.contains('hidden')) {
        box.style.transform = 'translate(-50%, -200%)'; 
        setTimeout(() => {
            box.style.transitionDuration = initialTransitionDuration; 
            box.classList.add('hidden');
            box.offsetHeight; 
            box.style.transitionDuration = ''; 
        }, 1000); 
    }
    
    box.textContent = day;
    box.classList.remove('hidden');
    
    if (!initialTransitionDuration) {
        initialTransitionDuration = getComputedStyle(box).transitionDuration;
    }
    
    setTimeout(() => {
        box.style.transform = 'translate(-50%, 50%)'; // End position (lower)
    }, 100);
    
    let color;
    switch(day) {
        case 'Monday':
            color = '#3498db'; 
            break;
        case 'Tuesday':
            color = '#2ecc71'; 
            break;
        case 'Wednesday':
            color = '#e74c3c'; 
            break;
        case 'Thursday':
            color = '#9b59b6'; 
            break;
        case 'Friday':
            color = '#f1c40f'; 
            break;
        case 'Saturday':
            color = '#e67e22'; 
            break;
        case 'Sunday':
            color = '#1abc9c'; 
            break;
        default:
            color = '#3498db'; 
    }
    
    
    setTimeout(() => {
        box.style.backgroundColor = color;
    }, 500);
}
