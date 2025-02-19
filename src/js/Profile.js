document.addEventListener('DOMContentLoaded', () => {
    const userStats = document.getElementById('user-stats');
    if (userStats) {
        // Ejemplo de datos del usuario
        const user = {
            name: 'John Doe',
            completedChallenges: 5,
            totalDistance: '500 km'
        };
        
        // Función para mostrar las estadísticas del usuario
        const displayUserStats = () => {
            userStats.textContent = `Name: ${user.name}, Completed Challenges: ${user.completedChallenges}, Total Distance: ${user.totalDistance}`;
        };
        
        displayUserStats();
    }
});