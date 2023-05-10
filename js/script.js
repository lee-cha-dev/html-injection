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
    // if (dirArr[dirArr.length - 1] === "home.html"){
    //     content.innerHTML += About();
    // }
    // if (dirArr[dirArr.length - 1] === "portfolio.html"){
    //     content.innerHTML += Portfolio();
    // }

    switch (dirArr[dirArr.length - 1]){
        case "home":
            console.log("Home");
            content.innerHTML += About();
            break;
        case "portfolio":
            console.log("Portfolio");
            content.innerHTML += Portfolio();
            break;
    }

}

function loadPage(pageName){
    if (window.location.href === `/html-injection/${pageName}`){
        content.innerHTML += About();
    }
}