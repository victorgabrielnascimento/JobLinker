import Card from "react-bootstrap/Card";
import "../styles/Match.css";
import MenuEmpresa from "./MenuEmpresa";
import Button from "react-bootstrap/Button";

function PerfilEmpresa() {
  return (
    <>
      <div className="match">
        <Card
          className="card-candidato"
          style={{ width: "23rem", height: "35rem" }}
        >
          <Card.Body>
            <Card.Title>
              <span className="name-user">User Name</span>
              <div className="img-user-perfil">
                <img src="../../files/icon1.png" alt="" />
              </div>
            </Card.Title>
            <Card.Text>
              <div class="Description">
                <h1>
                  Walmart é uma empresa integra e única, com mais de 10.000
                  lojas espalhadas pelo mundo, somos um destaque no ramo de
                  vendas.
                </h1>
              </div>
              <div class="Description">
                <h2>
                  Estamos em busca de profissionais para todas as áreas da nossa
                  empresa.
                </h2>
              </div>
              <div class="Description">
                <h2>
                  Estamos buscando profissionais para a nova loja de Curitiba-PR
                </h2>
              </div>
              <div class="config">
                <a href="/pro2">
                  <Button className="super-like" variant="link">
                    <img src="../../files/superlike.png" alt="" />
                  </Button>
                </a>
                <a href="/login">
                  <Button className="super-like" variant="link">
                    <img src="../../files/logout1.png" alt="" />
                  </Button>
                </a>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
        <MenuEmpresa></MenuEmpresa>
      </div>
    </>
  );
}
export default PerfilEmpresa;
