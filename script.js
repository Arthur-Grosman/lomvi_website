document.addEventListener("DOMContentLoaded", () => {
    // Console log to ensure the script file loaded successfully
    console.log("Website successfully loaded.");

    // You can add interactive elements here later, such as a mobile nav drawer
    
    // Hide placeholder text/icons if the profile.jpg successfully loads
    const profileImg = document.querySelector('.image-placeholder-frame img');
    const placeholderIcon = document.getElementById('placeholder-icon');
    const placeholderText = document.getElementById('placeholder-text');

    if (profileImg) {
        profileImg.onload = () => {
            if (placeholderIcon) placeholderIcon.style.display = 'none';
            if (placeholderText) placeholderText.style.display = 'none';
        };
    }
});