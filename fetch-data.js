// Define the async function to fetch and display user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
    const dataContainer = document.getElementById('api-data'); 

    try {
        // Fetch the user data from the API
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to display user names
        const userList = document.createElement('ul');

        // Iterate over the users and create <li> elements for each name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; 
            userList.appendChild(listItem); 
        });

        // Append the user list to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle errors and display an error message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Run the fetchUserData function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
