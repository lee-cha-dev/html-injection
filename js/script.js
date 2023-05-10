// import { Box } from "@chakra-ui";
// import { About } from "pages/About";

function bodyOnLoad(){
    // GET BODY ELEMENT
    const content = document.getElementById('body-content');
    console.log(window.location.href);
    let dir = window.location.href;
    let dirArr = dir.split('/');
    console.log(dirArr);
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

function loadPage(pageName){
    if (window.location.href === `/html-injection/${pageName}`){
        content.innerHTML += About();
    }
}