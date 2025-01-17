import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
    const navigate = useNavigate()

    return (
        <div className="w-50 m-auto pt-5">
        <Navbar expand="lg" className="bg-primary px-3">
        <Navbar.Brand href="#home" className="px-2" onClick={() => navigate('/')}><img src="../src/assets/meteoLogo.png" style={{width: "4em"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/Search'}>Search</Link>
            <NavDropdown title="Info" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Days</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mounths
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Gallery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contact us
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    </div>
    )
}

export default NavBar