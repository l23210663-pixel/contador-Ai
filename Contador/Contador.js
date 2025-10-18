document.addEventListener('DOMContentLoaded', () => {
    // Set the launch date (e.g., December 09, 2025)
    const launchDate = new Date('October, 02, 2025 00:00:00').getTime();

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = launchDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        daysEl.textContent = formatTime(days);
        hoursEl.textContent = formatTime(hours);
        minutesEl.textContent = formatTime(minutes);
        secondsEl.textContent = formatTime(seconds);

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            // You can add a message here when the countdown finishes
            // For example: document.querySelector('.main-title').textContent = '¡YA ESTAMOS ABIERTOS!';
        }
    }

    // Update the countdown every second
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Initial call to prevent a 1-second delay on page load
    updateCountdown();
});