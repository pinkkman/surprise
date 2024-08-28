document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;

    // Hide the form
    document.getElementById('submissionForm').classList.add('hidden');
    
    // Show the thank you message
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
    document.getElementById('thankYouMessage').innerText = `Thanks for your submission, ${name}. We will surprise you with a lucky draw on your birthday!`;

    // Show confetti effect
    showConfetti();
    
});

function showConfetti() {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.classList.remove('hidden');

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#F3FF33', '#FFBD33'];
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = Math.random() * 100 + 'vh';
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 1 + 's';
        confettiContainer.appendChild(confetti);
    }

    // Remove confetti after animation
    setTimeout(() => {
        confettiContainer.classList.add('hidden');
        confettiContainer.innerHTML = ''; // Clear confetti elements
    }, 3000); // Adjust to match animation duration
}
