// This javascript controls how the data is stored into localStorage and page is redirected to the blog.html.

const form = document.querySelector("#form-content")
const button = document.querySelector('#button')
const userName = document.querySelector('#username-input')
const title = document.querySelector('#title-input')
const content = document.querySelector('#content-input')
const theme = document.querySelector('header p')
const nextPage = document.querySelector('#next-page')


// This function redirects the page to blog.html when the form is submitted
function submitForm () {
    window.location = "blog.html"
}

// Temporary variable is created to store the object data from user inputs
let tempDataToAdd = []

function updateLocalStorage() {
    localStorage.setItem('blogData', JSON.stringify(tempDataToAdd))
}

function userInputValidation() {
    if (userName.value.trim()==='' || title.value.trim()==='' || content.value.trim()==='') {
        alert("Field cannot be left blank. Please enter a valid information");
        return false;
    } else {
        return true;
    }
}

function updateTempData (event) {
    event.preventDefault();

    if (userInputValidation()) {

        // takes user input from the three fields and stores it as object variable
        const blogData = {
            storedUser: userName.value.trim(),
            storedTitle: title.value.trim(),
            storedContent: content.value.trim()
        }

        // This checks if there's already a data in the localstorage and updates accordingly.
        const storedBlogDataEmpty = localStorage.getItem('blogData');
        if (storedBlogDataEmpty !== '') {
            const storedBlogData = JSON.parse(localStorage.getItem('blogData'))
            if (storedBlogData) {
                tempDataToAdd = storedBlogData
                tempDataToAdd.push(blogData)
            } else {
                tempDataToAdd.push(blogData)
            }
        } else {
            tempDataToAdd.push(blogData)
        }
        // Once tempDataToAdd is updated with both localStorage and new user input, it runs the function to update localStorage.
        updateLocalStorage()
        submitForm()
    } 
}

form.addEventListener('submit', updateTempData)
// button.addEventListener('click', submitForm)

nextPage.addEventListener('click', function() {
    if (localStorage.getItem('blogData')===null) {
        localStorage.setItem('blogData', '')
    }
    window.location = "blog.html"
})

// This console log shows the data is being stored properly in object format into localStorage
// console.log(JSON.parse(localStorage.getItem('blogData')))
