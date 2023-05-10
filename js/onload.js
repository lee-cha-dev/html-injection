// import { Box } from "@chakra-ui";
// import { About } from "pages/About";

// TOGGLE DEVELOPMENT AND DEPLOYMENT NAVIGATION
const dev = false;

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
        case "portfolio.html":           // LOAD PORTFOLIO CONTENT
            console.log("Portfolio");
            content.innerHTML += Portfolio();
            break;
        default:                    // LOAD LANDING PAGE
            console.log("Home Page");
            content.innerHTML += About();
    }
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
}