// Function to toggle dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode"); // Toggle dark mode class on body

    // Save dark mode state to cookie
    var isDarkMode = body.classList.contains("dark-mode");
    setCookie("darkMode", isDarkMode ? "enabled" : "disabled", 365);
}

// Function to set cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get cookie value by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Check if dark mode is enabled on page load
window.onload = function () {
    var darkModeCookie = getCookie("darkMode");
    if (darkModeCookie && darkModeCookie === "enabled") {
        document.body.classList.add("dark-mode");
    }
};