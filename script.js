document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            document.querySelectorAll('.faq-answer').forEach(el => el.style.display = "none");
            answer.style.display = "block";
        }
    });
});

document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validation logic
    const password = document.getElementById('password').value;
    const passwordCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!passwordCriteria.test(password)) {
        document.getElementById('registration-message').textContent = 'Password does not meet the criteria.';
        return;
    }

    // If validation passes
    document.getElementById('registration-message').textContent = 'Registration successful.';
    // Here, you can add code to handle the form submission, like sending data to a server
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Here, you can add code to handle the login, like sending credentials to a server for verification
    console.log('Login attempted');
});

// Mock user data (replace with real data from login response)
const userData = {
    teamName: "Team Example",
    leader: {
        name: "John Doe",
        email: "john@example.com",
    },
    // Add other relevant data
};

// Function to display dashboard with user data
function showDashboard() {
    document.getElementById('team-name-display').textContent = userData.teamName;
    document.getElementById('leader-name').textContent = userData.leader.name;
    document.getElementById('leader-email').textContent = userData.leader.email;

    // Show the dashboard
    document.getElementById('dashboard').style.display = 'block';
}

// Example of how to show the dashboard (you would call this after successful login)
// showDashboard();

document.getElementById('admin-search').addEventListener('input', function(event) {
    // Here, you can add code to filter the team list based on the search query
    console.log('Search query:', event.target.value);
});

document.getElementById('admin-sort').addEventListener('click', function() {
    // Here, you can add code to sort the team list
    console.log('Sort teams');
});

document.querySelectorAll('.view-team').forEach(button => {
    button.addEventListener('click', function() {
        // Here, you can add code to view team details
        console.log('View team details');
    });
});

document.querySelectorAll('.edit-team').forEach(button => {
    button.addEventListener('click', function() {
        // Here, you can add code to edit team details
        console.log('Edit team details');
    });
});

document.querySelectorAll('.delete-team').forEach(button => {
    button.addEventListener('click', function() {
        // Here, you can add code to delete a team
        console.log('Delete team');
    });
});

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Registration Form Validation
document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Example validation for password
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const passwordError = document.getElementById('password-error');

    // Reset error message
    passwordError.textContent = '';

    // Check password criteria
    if (!password.match(/[A-Z]/) || !password.match(/[a-z]/) || !password.match(/\d/) || !password.match(/[^A-Za-z0-9]/) || password.length < 8) {
        passwordError.textContent = 'Password does not meet criteria.';
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        passwordError.textContent = 'Passwords do not match.';
        return;
    }

    // Further form processing here
    console.log('Form Submitted');
});

// Toggle FAQ Answers
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('active');
    });
});
