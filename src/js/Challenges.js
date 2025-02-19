document.addEventListener('DOMContentLoaded', () => {
    const challengeList = document.getElementById('challenge-list');
    if (challengeList) {
        // Obtener los desafíos del almacenamiento local
        const challenges = JSON.parse(localStorage.getItem('challenges')) || [];
        
        // Función para mostrar los desafíos en la lista
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