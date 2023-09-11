import { Navbar, Nav } from "react-bootstrap";
import { Outlet, Link} from "react-router-dom";
import imgLogo from '../img/logo.png';

const NavBarExample = () => {
    return (
        <>  
    <Navbar className="navBg">
                <img className="logoclima" src={imgLogo} alt="logo" />
                <Nav.Link className="climaticamente" as={Link} to="/" ><span><span>Climaticamente</span></span></Nav.Link>
            <Nav className="me-auto">
                <Nav.Link className="navlista" as={Link} to="/inicio" ><span><span>Inicio</span></span></Nav.Link>
                <Nav.Link className="navlista" as={Link} to="/nosotras"><span><span>Nosotras</span></span></Nav.Link>
                <Nav.Link className="navlista" as={Link} to="/contacto"><span><span>Contacto</span></span></Nav.Link>                
            </Nav>
      
    </Navbar>  

    <section>
        <Outlet></Outlet>
    </section>

       </>
    )
}
export default NavBarExample