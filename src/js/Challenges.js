document.addEventListener('DOMContentLoaded', () => {
    const challengeList = document.getElementById('challenge-list');
    if (challengeList) {
        // Get challenges from local storage
        const challenges = JSON.parse(localStorage.getItem('challenges')) || [];
        
        // Show challenges in a list
        const displayChallenges = () => {
            challengeList.innerHTML = '';
            challenges.forEach(challenge => {
                const li = document.createElement('li');
                li.textContent = `${challenge.name}: ${challenge.description} (Goal: ${challenge.goal}, Duration: ${challenge.duration})`;
                challengeList.appendChild(li);
            });
        };
        
        displayChallenges();
    }
});