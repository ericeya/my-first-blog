// variables are created for 2 main sections. Button to go back to the first page and the loading of the page onto html with localStorage data.
const goBack = document.querySelector('#back-btn')
const blogPosts = document.querySelector('.blog-posts')


// This function loads what is to be shown to the user. For loop was used to iterate and depict all previous blog posts as well as the one that user just input.
function loadFromLocalStorage() {
    const loadBlogData = JSON.parse(localStorage.getItem('blogData'))
    for (let i=0; i<loadBlogData.length; i++) {
        // Created variables for each of the object properties to be stored under a div element.
        const blogList = document.createElement("div");
        const blogTitle = document.createElement('h3');
        const blogContent = document.createElement ('p');
        const blogUser = document.createElement('p')
        // Unique classes were given for each element created so that styling can be done thru CSS.
        blogList.classList.add('blog-list');
        blogTitle.classList.add('blog-title');
        blogContent.classList.add('blog-content');
        blogUser.classList.add('blog-user');
        // Then each variables were appended to correct parent.
        blogPosts.appendChild(blogList);
        blogList.appendChild(blogTitle);
        blogList.appendChild(blogContent);
        blogList.appendChild(blogUser);
        // Below pulls data from localStorage and generates strings onto the screen as blog posts.
        blogTitle.textContent = `${loadBlogData[i].storedTitle}`;
        blogContent.textContent = `${loadBlogData[i].storedContent}`;
        blogUser.textContent = `Posted by: ${loadBlogData[i].storedUser}`;
    
    }
}

// This section checks for empty string in localStorage and only runs the function to load the page if there is correct object values in the localStorage.
const loadBlogDataEmpty = localStorage.getItem('blogData')
if (loadBlogDataEmpty!=='') {
    loadFromLocalStorage();
}

// The event listener allows the user to go back to main screen with a click on the back button.
goBack.addEventListener('click', function() {
    window.location = "index.html"
})