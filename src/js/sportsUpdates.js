document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/public/json/sports.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const sportsUpdates = await response.json();

        function updateMatchesList(matches, listElementId) {
            const listElement = document.getElementById(listElementId);
            if (!listElement) return;

            listElement.innerHTML = ''; // Clear the list before adding new items

            matches.forEach(match => {
                const li = document.createElement('li');
                if (match.homeTeam && match.awayTeam) {
                    li.textContent = `${match.homeTeam} vs ${match.awayTeam} - ${match.status} (${match.score})`;
                } else if (match.player1 && match.player2) {
                    li.textContent = `${match.player1} vs ${match.player2} - ${match.status} (${match.score})`;
                }
                listElement.appendChild(li);
            });
        }

        updateMatchesList(sportsUpdates.sportsUpdates.soccerUpdates.matches, 'soccer-matches-list');
        updateMatchesList(sportsUpdates.sportsUpdates.nbaUpdates.matches, 'nba-matches-list');
        updateMatchesList(sportsUpdates.sportsUpdates.tennisUpdates.matches, 'tennis-matches-list');
        updateMatchesList(sportsUpdates.sportsUpdates.volleyballUpdates.matches, 'volleyball-matches-list');
    } catch (error) {
        console.error('Error fetching sports updates:', error);
    }
});