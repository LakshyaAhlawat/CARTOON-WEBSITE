// Wait for the page to finish loading
window.addEventListener('load', function() {
    // Delay before hiding the loading overlay (adjust as needed)
    setTimeout(function() {
        // Hide the loading overlay and show the main content
        document.getElementById('overlay').style.opacity = '0';
        document.getElementById('loading-message').style.fontSize = '0';
        document.getElementById('main-content').style.display = 'block';
    }, 4000); // Set the loading time in milliseconds (e.g., 8000 for 8 seconds)
});
