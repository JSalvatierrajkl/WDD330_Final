document.addEventListener('DOMContentLoaded', () => {
    const socialFeed = document.getElementById('social-feed');
    if (socialFeed) {
        // Ejemplo de datos de interacciones sociales
        const socialInteractions = [
            { user: 'Alice', message: 'Completed a 10 km run!' },
            { user: 'Bob', message: 'Joined the "Cycle 200 km" challenge!' }
        ];
        
        // Función para mostrar las interacciones sociales en la lista
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