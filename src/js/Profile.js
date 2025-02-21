document.addEventListener('DOMContentLoaded', () => {
    const userStats = document.getElementById('user-stats');
    if (userStats) {
        // Example user data
        const user = {
            name: 'John Doe',
            completedChallenges: 5,
            totalDistance: '500 km'
        };
        
        // Function to display user statistics
        const displayUserStats = () => {
            userStats.textContent = `Name: ${user.name}, Completed Challenges: ${user.completedChallenges}, Total Distance: ${user.totalDistance}`;
        };
        
        displayUserStats();
    }
});