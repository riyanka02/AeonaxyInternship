// document.getElementById('signupForm').addEventListener('submit', function(event) {
//     var username = document.getElementById('username').value;
//     // Example: check if username is already taken using AJAX
//     // This is a placeholder for your actual implementation
//     var isUsernameTaken = checkUsername(username); // You need to define this function
//     if (isUsernameTaken) {
//         event.preventDefault(); // Prevent form submission
//         document.getElementById('warning').style.display = 'block'; // Display the warning message
//     }
// });

// // // Function to check if the username is already taken
// // function checkUsername(username) {
// //     // This function should perform an AJAX request to your server to check if the username is already taken
// //     // Return true if the username is taken, false otherwise
// //     // This is a placeholder for your actual implementation
// //     return false; // Change this to your actual implementation
// // }
document.addEventListener('DOMContentLoaded', function() {
    const mailIcon = document.getElementById('mail-icon');
    const pinkTick = document.getElementById('pink-tick');

    mailIcon.addEventListener('click', function() {
        pinkTick.style.display = 'inline'; // Show the pink tick icon
    });
});
//avatarupload

const imageInput = document.getElementById("avatar-upload");
const cameraCircle = document.querySelector(".camera-circle");

imageInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        cameraCircle.style.backgroundImage = `url('${e.target.result}')`;
        cameraCircle.style.backgroundSize = 'cover';
        cameraCircle.style.backgroundPosition = 'center';
        cameraCircle.style.backgroundRepeat = 'no-repeat';
    };
    reader.readAsDataURL(file);
});


