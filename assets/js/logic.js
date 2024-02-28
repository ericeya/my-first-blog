// this would be for both forms like dark/light theme 
// linked to both documents

const themeChanger = document.querySelector('header p')
const header = document.querySelector('header')
const main = document.querySelector('main')
const middleBorder = document.querySelector('.left-side')
const circleBackground = document.querySelector('#background-circle')
const rightside = document.querySelector('.right-side')
const rightsideSubmitButton = document.querySelector('#button')
const nextPageButton = document.querySelector('#next-page')
const themeDivFirstPage = document.getElementById('first-page-theme')
const themeDivSecondPage = document.getElementById('second-page-theme')
const blogPostBox = document.querySelectorAll('.blog-list')
const blogPostInnerLine = document.querySelectorAll('.blog-title')
const footer = document.querySelector('footer')
const footerText = document.querySelectorAll('footer a')
const wholeBody = document.querySelector('body')
const headerBackBtn = document.querySelector('#back-btn')
const inputField = document.querySelectorAll('input')
const textarea = document.querySelector('#content-input')

// When there's no data in localStorage for light/dark theme mode, this function sets the theme to light mode.
function initialTheme() {
    const initialTheme  = localStorage.getItem('theme')
    if (initialTheme===null) {
        localStorage.setItem('theme', 'light')
    }
}

// This function changes the pages to dark mode. If statements check whether it is first or second page and then runs all cssText functions.
// These functions carry transition element for smooth change
function changeThemeToDark() {
    if (themeDivFirstPage !== null) {
        header.style.cssText='background-color:#1e272e; border-bottom: 10px double #d2dae2; transition: all 0.8s ease-in-out;';
        main.style.cssText='background-color:#1e272e; transition: all 0.8s ease-in-out;';
        middleBorder.style.cssText='border-right: 10px double #d2dae2; transition: all 0.8s ease-in-out;';
        circleBackground.style.cssText='background: linear-gradient(120deg, #6f7882, #6706dd, #523aa8); border-radius: 50%; color: #d2dae2; text-shadow: 3px 3px 5px #d2dae2; box-shadow: 0px 0px 15px #779ad8; border: 2px solid #808e9b; transition: all 0.8s ease-in-out;';
        for (let i=0; i < inputField.length; i++) {
            inputField[i].style.cssText='background-color: #808e9b; color: white; transition: all 0.8s ease-in-out;';
        }
        textarea.style.cssText='background-color: #808e9b; color: white; transition: all 0.8s ease-in-out;';
        rightside.style.cssText='background-color:#1e272e; color:#d2dae2; transition: all 0.8s ease-in-out;';
        rightsideSubmitButton.style.cssText = 'background-color: #d2dae2; color: black; border: 2px solid gray; transition: all 0.8s ease-in-out;';
        nextPageButton.style.cssText= 'background-color: #d2dae2; color: black; border: 2px solid gray; transition: all 0.8s ease-in-out;';
        themeChanger.textContent="🌒";
        localStorage.setItem('theme', 'dark')
    } else {
        header.style.cssText='background-color:#1e272e;  border-bottom: 10px double #8854d0; color: #d2dae2; transition: all 0.8s ease-in-out;';
        main.style.cssText='background-color:#1e272e; transition: all 0.8s ease-in-out;';
        wholeBody.style.cssText='background-color: #1e272e; transition: all 0.8s ease-in-out;';
        headerBackBtn.style.cssText='background-color:#d2dae2; color: black; border: 2px solid #0fbcf9; transition: all 0.8s ease-in-out;';
        for (let i=0; i < blogPostBox.length; i++) {
            blogPostBox[i].style.cssText='background-color:#1e272e; border: 3px solid #d2dae2; color: #d2dae2; box-shadow: 0px 0px 2px 2px #8854d0; transition: all 0.8s ease-in-out;';
        }
        for (let i=0; i < blogPostInnerLine.length; i++) {
            blogPostInnerLine[i].style.cssText='border-bottom: 2px solid #d2dae2; color: #d2dae2; transition: all 0.8s ease-in-out';
        }
        footer.style.cssText='border-top: 10px double #8854d0; color: #d2dae2; transition: all 0.8s ease-in-out';
        for (let i=0; i < footerText.length; i++) {
            footerText[i].style.cssText='color:#d2dae2; transition: all 0.8s ease-in-out';
        }
        themeChanger.textContent="🌒";
        localStorage.setItem('theme', 'dark')
    }
}

// Same as above but to light mode.
function changeThemeToLight() {
    if (themeDivFirstPage !== null) {
        header.style.cssText=`background-color:white; transition: all 0.8s ease-in-out;`;
        main.style.cssText='background-color:white; transition: all 0.8s ease-in-out;';
        middleBorder.style.cssText='border-right: 10px double black; transition: all 0.8s ease-in-out;';
        circleBackground.style.cssText='linear-gradient(to bottom, #fed330, #fa8231); border-radius: 50%; color: white; border: 2px solid white; transition: all 0.8s ease-in-out;';
        for (let i=0; i < inputField.length; i++) {
            inputField[i].style.cssText='background-color: white; color: black; transition: all 0.8s ease-in-out;';
        }
        textarea.style.cssText='background-color: white; color: black; transition: all 0.8s ease-in-out;';
        rightside.style.cssText='background-color:white; color:black; transition: all 0.8s ease-in-out;';
        rightsideSubmitButton.style.cssText = 'background-color: black; color: white;; transition: all 0.8s ease-in-out;';
        nextPageButton.style.cssText= 'background-color: black; color: white;; transition: all 0.8s ease-in-out;';   
        themeChanger.textContent="🌞";
        localStorage.setItem('theme', 'light')
    } else {
        header.style.cssText='background-color:white; transition: all 0.8s ease-in-out; border-bottom: 10px double black; color: black';
        main.style.cssText='background-color:white; transition: all 0.8s ease-in-out;';
        wholeBody.style.cssText='background-color: white; transition: all 0.8s ease-in-out;';
        headerBackBtn.style.cssText='background-color:black;  color: white; transition: all 0.8s ease-in-out;';
        for (let i=0; i < blogPostBox.length; i++) {
            blogPostBox[i].style.cssText='background-color:white; border: 3px solid black; color: black; transition: all 0.8s ease-in-out;';
        }
        for (let i=0; i < blogPostInnerLine.length; i++) {
            blogPostInnerLine[i].style.cssText='border-bottom: 2px solid black; color: black; transition: all 0.8s ease-in-out';
        }
        footer.style.cssText='border-top: 10px double black; color: black; transition: all 0.8s ease-in-out';
        for (let i=0; i < footerText.length; i++) {
            footerText[i].style.cssText='color:black; transition: all 0.8s ease-in-out';
        }
        themeChanger.textContent="🌞";
        localStorage.setItem('theme', 'light')
    }
}

// This function is when the sun or moon emoji is clicked to switch the theme. It checks for current theme and switches the mode.
function changeThemev2() {
    const currentTheme = localStorage.getItem('theme')
    if (currentTheme==='light') {
        changeThemeToDark()
    } else {
        changeThemeToLight()
    }
}


// This function loads when the blog.html is opened. If and else if functions check for whether it's light or dark mode and if it's in first (index.html) page or second (blog.html) page, then renders the page.
function loadTheme() {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' && themeDivFirstPage !== null) {
        header.style.cssText=`background-color:white; transition: all 1s ease-out`;
        main.style.cssText='background-color:white; ';
        middleBorder.style.cssText='border-right: 10px double black; ';
        circleBackground.style.cssText='linear-gradient(to bottom, #fed330, #fa8231); border-radius: 50%; color: white; border: 2px solid white; ';
        for (let i=0; i < inputField.length; i++) {
            inputField[i].style.cssText='background-color: white; color: black; ';
        }
        textarea.style.cssText='background-color: white; color: black; ';
        rightside.style.cssText='background-color:white; color:black; ';
        rightsideSubmitButton.style.cssText = 'background-color: black; color: white;';
        nextPageButton.style.cssText = 'background-color: black; color: white;';
        themeDivFirstPage.setAttribute("data-theme", "light");
        themeChanger.textContent="🌞";
    } else if (savedTheme ==='light' && themeDivSecondPage !== null) {
        header.style.cssText='background-color:white;  border-bottom: 10px double black; color: black';
        main.style.cssText='background-color:white; ';
        wholeBody.style.cssText='background-color: white; ';
        headerBackBtn.style.cssText='background-color:black;  color: white; ';
        for (let i=0; i < blogPostBox.length; i++) {
            blogPostBox[i].style.cssText='background-color:white; border: 3px solid black; color: black; ';
        }
        for (let i=0; i < blogPostInnerLine.length; i++) {
            blogPostInnerLine[i].style.cssText='border-bottom: 2px solid black; color: black;';
        }
        footer.style.cssText='border-top: 10px double black; color: black;';
        for (let i=0; i < footerText.length; i++) {
            footerText[i].style.cssText='color:black;';
        }
        themeDivSecondPage.setAttribute('data-theme', 'light');
        themeChanger.textContent="🌞";
    } else if (savedTheme === 'dark' && themeDivFirstPage !== null) {
        header.style.cssText='background-color:#1e272e; border-bottom: 10px double #d2dae2';
        main.style.cssText='background-color:#1e272e';
        middleBorder.style.cssText='border-right: 10px double #d2dae2; ';
        circleBackground.style.cssText='background: linear-gradient(120deg, #6f7882, #6706dd, #523aa8); border-radius: 50%; color: #d2dae2; text-shadow: 3px 3px 5px #d2dae2; box-shadow: 0px 0px 15px #779ad8; border: 2px solid #808e9b; ';
        for (let i=0; i < inputField.length; i++) {
            inputField[i].style.cssText='background-color: #808e9b; color: white; ';
        }
        textarea.style.cssText='background-color: #808e9b; color: white; ';
        rightside.style.cssText='background-color:#1e272e; color:#d2dae2; ';
        rightsideSubmitButton.style.cssText = 'background-color: #d2dae2; color: black; border: 2px solid gray; ';
        nextPageButton.style.cssText = 'background-color: #d2dae2; color: black; border: 2px solid gray; ';
        themeDivFirstPage.setAttribute("data-theme", "dark");
        themeChanger.textContent="🌒";
    } else if (savedTheme === 'dark' && themeDivSecondPage !== null) {
        header.style.cssText='background-color:#1e272e;  border-bottom: 10px double #8854d0; color: #d2dae2; ';
        main.style.cssText='background-color:#1e272e; ';
        wholeBody.style.cssText='background-color: #1e272e; ';
        headerBackBtn.style.cssText='background-color:#d2dae2; color: black; border: 2px solid #0fbcf9; ';
        for (let i=0; i < blogPostBox.length; i++) {
            blogPostBox[i].style.cssText='background-color:#1e272e; border: 3px solid #d2dae2; color: #d2dae2; box-shadow: 0px 0px 2px 2px #8854d0; ';
        }
        for (let i=0; i < blogPostInnerLine.length; i++) {
            blogPostInnerLine[i].style.cssText='border-bottom: 2px solid #d2dae2; color: #d2dae2;';
        }
        footer.style.cssText='border-top: 10px double #8854d0; color: #d2dae2;';
        for (let i=0; i < footerText.length; i++) {
            footerText[i].style.cssText='color:#d2dae2;';
        }
        themeDivSecondPage.setAttribute('data-theme', 'dark');
        themeChanger.textContent="🌒";
    }
}

// When html pages load, these two functions are initiated automatically.
initialTheme()
loadTheme()

themeChanger.addEventListener('click', changeThemev2)
