$(function () {
  $('#datetimepicker').datetimepicker();
});


// // Brief donation records script
// // Initial donation records

// //let totalDonations = 0;
//   //  let lastDonationDate = '--/--/----';

//     // Function to update the donation records
//     function updateDonationRecords() {
//          Update the HTML elements with the current values
//         document.getElementById('donationsMade').textContent = totalDonations;
//         document.getElementById('lastDonationDate').textContent = lastDonationDate;
//     }

//     // Example: Function to simulate a donation event
//     function makeDonation() {
//         totalDonations++; // Increment the total number of donations
//         lastDonationDate = new Date().toLocaleDateString(); // Set the last donation date to the current date
//         updateDonationRecords(); // Update the donation records on the page
//     }

//     // Example: Call the makeDonation() function when a donation is made (replace this with your actual donation event)
//      For demonstration purposes, you can call it on page load
//     makeDonation();




// // REQUEST NAV BAR SCRIPT
//     // Add event listeners to each tab link to handle tab switching
//     document.querySelectorAll('.nav-link').forEach(function(tabLink) {
//         tabLink.addEventListener('click', function(event) {
//             // Prevent default link behavior
//             event.preventDefault();

//             // Remove 'active' class from all tab links
//             document.querySelectorAll('.nav-link').forEach(function(link) {
//                 link.classList.remove('active');
//             });

//             // Add 'active' class to the clicked tab link
//             this.classList.add('active');

//             // Hide all tab content
//             document.querySelectorAll('.tab-pane').forEach(function(tabContent) {
//                 tabContent.classList.remove('show', 'active');
//             });

//             // Show the corresponding tab content based on the href attribute of the clicked tab link
//             var targetId = this.getAttribute('href').substring(1);
//             document.getElementById(targetId).classList.add('show', 'active');
//         });
//     });



// // Alert badge for New tab in request page
// // Example: Simulate new request
// function simulateNewRequest() {
//         // Increment the badge content
//         const badge = document.getElementById('new-tab-badge');
//         const currentCount = parseInt(badge.textContent) || 0;
//         badge.textContent = currentCount + 1;

//         // Show the badge
//         badge.style.display = 'inline';
//     }

//     // Simulate a new request after 3 seconds (replace this with your actual logic)
//     setTimeout(simulateNewRequest, 3000);




