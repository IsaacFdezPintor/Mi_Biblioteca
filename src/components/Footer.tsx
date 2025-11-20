import "./Footer.css";
function Footer() {
    const year = new Date().getFullYear();
    
    return (<footer className="footer">© {year} Blog de Desarrollo Web</footer>);
}

export default Footer;