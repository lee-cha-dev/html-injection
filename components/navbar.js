// NAV IS USED TO HOLD THE HTML FOR THE NAVBAR
// THE DEV GLOBAL WILL DETERMINE WHICH LINKS TO USE
// ADD A TAGS ANYTIME A NEW NAV BUTTON IS ADDED TO THE NAVBAR
// ENSURE THAT BOTH DEVELOPMENT NAV AND DEPLOYMENT NAV ARE UPDATED


const Navbar = () => {
    // NAV ELEMENT TO HOLD THE NAVBAR'S HTML
    let nav;

    // IF THE WEBSITE IS IN DEVELOPMENT MODE, THEN SET THE PAGES TO THEIR HTML PAGE
    // ELSE USE THE DEPLOYED LINKS
    if (dev === true){
        nav =
            "<nav id='navbar' class='navbar'>" +
            "   <a id='logo-link' href='index.html'><h3 id='logo-text'>LC</h3></a>" +
            "   <a href='portfolio.html'><p>Portfolio</p></a>" +
            "   <span id='light-icon' onclick='setLightTheme()' class='material-symbols-outlined theme-icon light-icon'>light_mode</span>" +
            "   <span id='dark-icon' onclick='setDarkTheme()' class='material-symbols-outlined theme-icon dark-icon'>dark_mode</span>" +
            "</nav>";
    } else {
        nav =
            "<nav id='navbar' class='navbar'>" +
            "   <a id='logo-link' href='./'><h3 id='logo-text'>LC</h3></a>" +
            "   <a href='portfolio'><p>Portfolio</p></a>" +
            "   <span id='light-icon' onclick='setLightTheme()' class='material-symbols-outlined theme-icon light-icon'>light_mode</span>" +
            "   <span id='dark-icon' onclick='setDarkTheme()' class='material-symbols-outlined theme-icon dark-icon'>dark_mode</span>" +
            "</nav>";
    }

    // RETURN THE NAVBAR
    return nav;
}
