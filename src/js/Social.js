document.addEventListener('DOMContentLoaded', () => {
    const socialFeed = document.getElementById('social-feed');
    if (socialFeed) {
        // Example social interaction data
        const socialInteractions = [
            { user: 'Alice', message: 'Completed a 10 km run!' },
            { user: 'Bob', message: 'Joined the "Cycle 200 km" challenge!' }
        ];
        
        // Function to display social interactions in the list
        const displaySocialInteractions = () => {
            socialFeed.innerHTML = '';
            socialInteractions.forEach(interaction => {
                const li = document.createElement('li');
                li.textContent = `${interaction.user}: ${interaction.message}`;
                socialFeed.appendChild(li);
            });
        };
        
        displaySocialInteractions();
    }
});