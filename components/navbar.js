
const dev = true;
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
