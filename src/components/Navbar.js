import logo_airbnb from "../images/airbnb_logo.png"
export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={logo_airbnb} alt="logo"/>
        </nav>
    )    
}