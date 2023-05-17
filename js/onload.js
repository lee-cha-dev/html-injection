// import { Box } from "@chakra-ui";
// import { About } from "pages/About";

// TOGGLE DEVELOPMENT AND DEPLOYMENT NAVIGATION
const dev = true;

// ONLOAD FOR ALL BODY TAGS IN EVERY PAGE
function bodyOnLoad(){

    // GET BODY ELEMENT
    const content = document.getElementById('body-content');
    console.log(window.location.href);
    let dir = window.location.href;
    let dirArr = dir.split('/');
    console.log(dirArr);
    // HANDLING PAGE TO LOAD
    if (dev === false){
        deployedNav(dirArr, content);
    } else {
        devNav(dirArr, content);
    }
}

// UPDATE THE NAVIGATION IN BOTH COLUMN AS NEW PAGES ARE ADD -- MIGHT MAKE THIS MORE EFFICIENT
// ADD ANOTHER CASE WITH THE RELEVANT NAME OR FILE NAME
// BE SURE TO UPDATE THE NAV BAR AS WELL
function devNav(dirArr, content){
    // HANDLING PAGE TO LOAD
    switch (dirArr[dirArr.length - 1]){
        case "portfolio.html":          // LOAD PORTFOLIO CONTENT
            console.log("Portfolio");
            content.innerHTML += Portfolio();
            break;
        default:                        // LOAD LANDING PAGE
            console.log("Home Page");
            content.innerHTML += About();
    }
    // SET CURRENT THEME
    handleTheme();
}

function deployedNav(dirArr, content){
    // HANDLING PAGE TO LOAD
    switch (dirArr[dirArr.length - 1]){
        case "portfolio":           // LOAD PORTFOLIO CONTENT
            console.log("Portfolio");
            content.innerHTML += Portfolio();
            break;
        default:                    // LOAD LANDING PAGE
            console.log("Home Page");
            content.innerHTML += About();
    }
    // SET CURRENT THEME
    handleTheme();
}

function handleTheme(){
    // CHECK FOR COOKIE THAT WILL DETERMINE LAST USED THEME

    // IF NO COOKIE CHECK FOR SYSTEM SETTINGS -- IF POSSIBLE
    setDarkTheme();
}

// TOGGLE THEME FUNCTIONS -- FOR SETTING THE THEM IN HANDLE THEME
// AND ON CLICK FUNCTIONS FOR THE THEME TOGGLE IN THE NAVBAR --GLOBALLY ACCESSED
function setDarkTheme(){
    // SET BODY THEME
    const body = document.getElementById("body");
    body.classList.remove("body-light-theme");
    body.classList.add("body-dark-theme");

    // SET NAVBAR THEME
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('navbar-light-theme');
    navbar.classList.add('navbar-dark-theme');

    // SET LIGHT ICON TOGGLE DISPLAY TO FLEX
    document.getElementById('light-icon').style.display = 'flex';

    // SET DARK ICON TOGGLE DISPLAY TO NONE;
    document.getElementById('dark-icon').style.display = 'none';

    // SWAP ICONS
    document.getElementById('light-icon').style.display = 'flex';
    document.getElementById('dark-icon').style.display = 'none';
    console.log("dark-theme");
}

function setLightTheme(){
    // SET BODY THEME
    const body = document.getElementById("body");
    body.classList.remove("body-dark-theme");
    body.classList.add("body-light-theme");

    // SET NAVBAR THEME
    const navbar = document.getElementById('navbar');
    navbar.classList.remove('navbar-dark-theme');
    navbar.classList.add('navbar-light-theme');

    // SET LIGHT ICON TOGGLE DISPLAY TO NONE
    document.getElementById('light-icon').style.display = 'none';

    // SET DARK ICON TOGGLE DISPLAY TO FLEX;
    document.getElementById('dark-icon').style.display = 'flex';

    // SWAP ICONS
    document.getElementById('light-icon').style.display = 'none';
    document.getElementById('dark-icon').style.display = 'flex';
}
