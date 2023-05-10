// NAV IS USED TO HOLD THE HTML FOR THE NAVBAR
// THE DEV GLOBAL WILL DETERMINE WHICH LINKS TO USE
// ADD A TAGS ANYTIME A NEW NAV BUTTON IS ADDED TO THE NAVBAR
// ENSURE THAT BOTH DEVELOPMENT NAV AND DEPLOYMENT NAV ARE UPDATED


const dev = false;
let nav;
if (dev === true){
    nav =
        "<nav class='navbar'>" +
        "   <a href='index.html'>LC</a>" +
        "   <a href='portfolio.html'>Portfolio</a>" +
        "</nav>";
} else {
    nav =
        "<nav class='navbar'>" +
        "   <a href='./'>LC</a>" +
        "   <a href='/html-injection/portfolio'>Portfolio</a>" +
        "</nav>";
}

const Navbar = () => {
    return (nav);
}
