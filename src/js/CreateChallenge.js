document.addEventListener('DOMContentLoaded', () => {
    const createChallengeForm = document.getElementById('create-challenge-form');
    if (createChallengeForm) {
        createChallengeForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const challengeName = document.getElementById('challenge-name').value;
            const challengeDescription = document.getElementById('challenge-description').value;
            const challengeGoal = document.getElementById('challenge-goal').value;
            const challengeDuration = document.getElementById('challenge-duration').value;
            
            const newChallenge = {
                name: challengeName,
                description: challengeDescription,
                goal: challengeGoal,
                duration: challengeDuration
            };
            
            // Get existing challenges from local storage
            const challenges = JSON.parse(localStorage.getItem('challenges')) || [];
            
            // Add the new challenge to the list
            challenges.push(newChallenge);
            
            // Save the updated list to local storage
            localStorage.setItem('challenges', JSON.stringify(challenges));
            
            // Clear the form after creating the challenge
            createChallengeForm.reset();
            
            // Redirect to the challenges page
            window.location.href = '/src/challenges/index.html';
        });
    }
});