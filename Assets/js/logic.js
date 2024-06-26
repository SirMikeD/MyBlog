document.addEventListener('DOMContentLoaded', function() {
    let darkMode = true;
    const submitBtn = document.getElementById('submitBtn');
    
    if(submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault();
        
            // Get form values
            const username = document.getElementById('username').value;
            const blogTitle = document.getElementById('blogTitle').value;
            const blogContent = document.getElementById('blogContent').value;
        
            // Check if any of the fields are empty
            if (!username || !blogTitle || !blogContent) {
                alert('Please complete all fields or click on Browse Blogs to view them without posting one of your own.'); // Display an alert message if any field is empty
                return; // Exit the function
            }
        
            // Create data object
            const data = {
                username: username,
                title: blogTitle,
                content: blogContent
            };
        
            // Retrieve existing blogs from localStorage or initialize an empty array
            const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
            
            // Add the new blog to the array
            blogs.unshift(data);
            
            // Store the updated array back in localStorage
            localStorage.setItem('blogs', JSON.stringify(blogs));
        
            // Redirect to blog.html
            window.location.href = 'blog.html';
        });
    }
    
    // Toggle light mode/dark mode
    const toggleBtn = document.getElementById('toggleBtn');

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            const body = document.body;
            body.classList.toggle('light-mode'); // Toggle light mode class
            body.classList.toggle('dark-mode'); // Toggle dark mode class
            
            darkMode = !darkMode; // Update darkMode flag
        });
    }
});
