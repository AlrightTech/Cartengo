
const timelineSteps = [
    {
        title: '2014 Toyota Fj Cruiser',
        image: '././img/steps/slide (1).png',
        icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 8h-5l-1.5-3h-3L9 8H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-4 10H8v-1h8v1zm2-3H6v-1h12v1zm0-3H6v-1h12v1z" fill="currentColor"/>
              </svg>`,
        completed: true
    },
    {
        title: '2014 Toyota Fj Cruiser',
        image: '././img/steps/slide (5).png',
        icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" fill="currentColor"/>
              </svg>`,
        completed: true
    },
    {
        title: '2014 Toyota Fj Cruiser',
        image: '././img/steps/slide (4).png',
        icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" fill="currentColor"/>
              </svg>`,
        completed: true
    },
    {
        title: '2014 Toyota Fj Cruiser',
        image: '././img/steps/slide (3).png',
        icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="currentColor"/>
              </svg>`,
        completed: true
    },
    {
        title: '2014 Toyota Fj Cruiser',
        image: '././img/steps/slide (2).png',
        icon: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2V7h-4v2h2z" fill="currentColor"/>
              </svg>`,
        completed: false
    }
];

function renderTimelineSteps() {
    const stepsContainer = document.getElementById('timelineSteps');
    
    timelineSteps.forEach((step, index) => {
        const stepElement = document.createElement('div');
        stepElement.className = 'col-md-2 timeline-step';
        
        stepElement.innerHTML = `
           <div class="step-image">
                <img src="${step.image}" alt="${step.title}">
            </div>
            <div class="step-icon ${step.completed ? 'completed' : ''}">
               
                ${step.icon}
                ${step.completed ? '<div class="check-icon">✓</div>' : ''}
            </div>
            <div class="step-title">${step.title}</div>
        `;
        
        stepsContainer.appendChild(stepElement);
    });
}

// Initialize timeline on page load
document.addEventListener('DOMContentLoaded', renderTimelineSteps);

// Add this to handle icon colors
document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.step-icon svg');
    icons.forEach(icon => {
        if (icon.closest('.completed')) {
            icon.style.color = '#ffffff';
        } else {
            icon.style.color = '#6c757d';
        }
    });
});
 