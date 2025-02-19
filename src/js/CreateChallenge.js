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
            
            // Obtener los desafíos existentes del almacenamiento local
            const challenges = JSON.parse(localStorage.getItem('challenges')) || [];
            
            // Agregar el nuevo desafío a la lista
            challenges.push(newChallenge);
            
            // Guardar la lista actualizada en el almacenamiento local
            localStorage.setItem('challenges', JSON.stringify(challenges));
            
            // Limpiar el formulario después de crear el desafío
            createChallengeForm.reset();
            
            // Redirigir a la página de desafíos
            window.location.href = '/src/challenges/index.html';
        });
    }
});