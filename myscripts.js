

// COUNTDOWN TIMER SCRIPT
let donationMade = false; // Variable to track if a donation has been made

// Function to start the timer
function startTimer() {
if (!donationMade) {
    // Set the target date for donation (three months from now)
    const targetDate = new Date();
    targetDate.setMonth(targetDate.getMonth() + 3);

    // Function to update the timer
    function updateTimer() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        // Update the timer values in the HTML
        document.getElementById('months').textContent = months.toString().padStart(2, '0');
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');

        // Check if the target date has passed
        if (timeDifference <= 0) {
            clearInterval(timerInterval); // Stop the timer
        }
    }

    // Call the updateTimer function every second
    const timerInterval = setInterval(updateTimer, 1000);

    // Initial call to update the timer immediately
    updateTimer();

    donationMade = true; // Set donationMade to true to prevent starting the timer again
}
}

// Example: Call startTimer() when the user makes a donation (replace this with your actual donation event)
document.getElementById('donateButton').addEventListener('click', startTimer);


// Brief donation records script
// Initial donation records
let totalDonations = 0;
    let lastDonationDate = '--/--/----';

    // Function to update the donation records
    function updateDonationRecords() {
        // Update the HTML elements with the current values
        document.getElementById('donationsMade').textContent = totalDonations;
        document.getElementById('lastDonationDate').textContent = lastDonationDate;
    }

    // Example: Function to simulate a donation event
    function makeDonation() {
        totalDonations++; // Increment the total number of donations
        lastDonationDate = new Date().toLocaleDateString(); // Set the last donation date to the current date
        updateDonationRecords(); // Update the donation records on the page
    }

    // Example: Call the makeDonation() function when a donation is made (replace this with your actual donation event)
    // For demonstration purposes, you can call it on page load
    makeDonation();




// REQUEST NAV BAR SCRIPT
    // Add event listeners to each tab link to handle tab switching
    document.querySelectorAll('.nav-link').forEach(function(tabLink) {
        tabLink.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Remove 'active' class from all tab links
            document.querySelectorAll('.nav-link').forEach(function(link) {
                link.classList.remove('active');
            });

            // Add 'active' class to the clicked tab link
            this.classList.add('active');

            // Hide all tab content
            document.querySelectorAll('.tab-pane').forEach(function(tabContent) {
                tabContent.classList.remove('show', 'active');
            });

            // Show the corresponding tab content based on the href attribute of the clicked tab link
            var targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('show', 'active');
        });
    });



// Alert badge for New tab in request page
// Example: Simulate new request
function simulateNewRequest() {
        // Increment the badge content
        const badge = document.getElementById('new-tab-badge');
        const currentCount = parseInt(badge.textContent) || 0;
        badge.textContent = currentCount + 1;

        // Show the badge
        badge.style.display = 'inline';
    }

    // Simulate a new request after 3 seconds (replace this with your actual logic)
    setTimeout(simulateNewRequest, 3000);




