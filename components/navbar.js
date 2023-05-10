
const Navbar = () => {
    if (dev === true){
        return (
            "<nav class='navbar'>" +
            "   <a href='index.html'>LC</a>" +
            "   <a href='/portfolio'>Portfolio</a>" +
            "</nav>"
        )
    }
    return (
        "<nav class='navbar'>" +
        "   <a href='./'>LC</a>" +
        "   <a href='/portfolio'>Portfolio</a>" +
        "</nav>"
    )
}
