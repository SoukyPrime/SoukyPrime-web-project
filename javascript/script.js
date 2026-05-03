document.addEventListener('DOMContentLoaded', () => {
    
    const nyxForm = document.getElementById('nyxForm');
    const display = document.getElementById('greetingDisplay');

    nyxForm.addEventListener('submit', function(event) {
        event.preventDefault(); // stops refreshing

        const name = document.getElementById('userName').value; // Collects input

        // Display greeting
        display.innerHTML = `
    <p>Purr-fect! Thanks for visiting, <strong>${name}</strong>. Madame Nyx says hello!</p>
    <img src="../images/No_schoolwork_cat.jpg" alt="Madame Nyx greeting" title="Madame Nyx greeting" style="width:300px; border-radius:10px;">
`;
        
        nyxForm.reset(); // Clears input after submission
    });
});