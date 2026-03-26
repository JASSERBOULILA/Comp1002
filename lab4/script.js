// created three variables for the welcome form and the welcome message
const welcomeForm = document.getElementById('welcomeForm');
const nameInput = document.getElementById('nameInput');
const welcomeMessage = document.getElementById('welcomeMessage');

welcomeForm.addEventListener('submit', function(event) {
    // Prevent the page from refresh
    event.preventDefault();
    
    // Get user's name
    const userName = nameInput.value;

    // validate the user name if it empty show enter your name and break the function
    if(!userName){
        welcomeMessage.classList.add('error');
        welcomeMessage.textContent = 'enter your name';
        return;
    }
    //reset the class we added before because the page cant refresh
    welcomeMessage.classList.remove('error');

    // Display welcome message
    welcomeMessage.textContent = `Welcome, ${userName}!`;
});



// function for the light/dark mode toggle
const toggleDarkMode = ()=>{

    const body = document.body;
    // toggle dark mode
    body.classList.toggle('dark-mode');
}