

const Navbar = () => {
    const dev = false;
    if (dev === true){
        return (
            "<nav class='navbar'>" +
            "   <a href='index.html'>LC</a>" +
            "   <a href='portfolio.html'>Portfolio</a>" +
            "</nav>"
        )
    }
    return (
        "<nav class='navbar'>" +
        "   <a href='./'>LC</a>" +
        "   <a href='/html-injection/portfolio'>Portfolio</a>" +
        "</nav>"
    )
}
