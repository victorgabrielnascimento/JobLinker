import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function MenuEmpresa() {
  return (
    <>
      <div className="menu">
        <img src="../../files/bground-menu.svg" alt="" />
        <div className="btn-menu">
          <Nav>
            <Nav.Item>
              <Button variant="link">
                <Link to="/chat">
                  <img src="../../files/icon-chat.svg" alt="" />
                </Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="link">
                <Link to="/match">
                  <img src="../../files/icon-work.svg" alt="" />
                </Link>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <Button variant="link">
                <Link to="/perfilempresa">
                  <img src="../../files/icon-user.svg" alt="" />
                </Link>
              </Button>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
}
export default MenuEmpresa;
