
const createThemeCookies = (themeType) => {
    setThemeCookies("theme", themeType, 90);
}

const getThemeCookies = () => {
    const decodedCookie = decodeURIComponent(document.cookie);

    const cookies = decodedCookie.split("; ");

    return cookies[0].split("=");
}

const setThemeCookies = (name, value, daysToExpiration) => {
    // GET AND SET DATE TO NUMBER OF DAYS (IN MILLISECONDS)
    const date = new Date();
    date.setTime(date.getTime() + daysToExpiration * 24 * 60 * 60 * 1000);

    // CONVERT DATE TO A UTC STRING
    const expires = date.toUTCString();

    // ADD COOKIE
    document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires};SameSite=Lax;`;
}

const deleteThemeCookies = () => {
    setThemeCookies("theme", null, null);
}

// CALL WHEN USER TOGGLES TO DARK MODE
const updateThemeCookiesToDark = () => {

}

// CALL WHEN USER TOGGLES TO LIGHT MODE
const updateThemeCookiesToLight = () => {

}

const handleCookies = () => {
    const themeCookie = getThemeCookies();
    if (themeCookie.length === 2){
        // COOKIE ALREADY EXISTS -- SET THEME
        switch (themeCookie[1]) {
            case "light":
                setLightTheme();
                break;
            case "dark":
                setDarkTheme();
                break;
        }
    } else {
        // COOKIE DOES NOT EXIST -- CREATE COOKIE, THEN SET THEME
        const themeMatch = window.matchMedia("(prefers-color-scheme: dark)");
        if (themeMatch.matches){
            createThemeCookies("dark");
            setDarkTheme();
        } else { createThemeCookies("light"); setLightTheme(); }
    }
}

// A COOKIE WILL/SHOULD BE MADE WHEN USER FIRST VISITS SITE. THE COOKIE WILL DETERMINE THE
// DEFAULT COLOR SETTING AND TOGGLE TO LIGHT/DARK BASED ON THOSE SETTINGS. A COOKIE WILL BE
// GENERATED WHEN THIS OCCURS.
// -- THIS SHOULD ONLY HAPPEN WHEN THE USER VISITS FOR THE FIRST TIME OR DOES NOT HAVE
// -- SITE COOKIES FOR THE THEME
