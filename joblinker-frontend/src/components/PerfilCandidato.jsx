import Card from "react-bootstrap/Card";
import "../styles/Match.css";
import MenuEmpresa from "./MenuEmpresa";
import Button from "react-bootstrap/Button";

function PerfilCandidato() {
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
                <img src="../../files/a.png" alt="" />
              </div>
            </Card.Title>
            <Card.Text>
              <div>Formação acadêmica</div>
              <div>Descrição</div>
              <div>Qualidades</div>
              <div>Idade</div>
              <div>Experiência</div>
              <div>Cursos</div>
              <div>Hobbies</div>
              <div class="config">
                <a href="/pro">
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
export default PerfilCandidato;
