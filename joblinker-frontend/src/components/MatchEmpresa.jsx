import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Match.css";

function MatchEmpresa() {
  return (
    <>
      <div className="match">
        <Card className="card-candidato" style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>
              <span className="name-user w-100">User Name</span>
              <div className="img-user">
                <img src="../../files/icon1.png" alt="" />
              </div>
            </Card.Title>
            <Card.Text>
              <div>Tipo de Vaga</div>
              <div>Descrição da função</div>
              <div>Localidade</div>
              <div>Exigências</div>
            </Card.Text>
            <Button className="perfil-user" variant="link">
              {" "}
              <img src="../../files/Vector.svg" alt="" />
            </Button>
          </Card.Body>
        </Card>
        <div className="btn-match">
          <Button variant="link">
            <img src="../../files/recusar.png" alt="" />
          </Button>
          <Button className="super-like" variant="link">
            <img src="../../files/superlike.png" alt="" />
          </Button>
          <Button variant="link">
            <img src="../../files/aceitar.png" alt="" />{" "}
          </Button>
        </div>
      </div>
    </>
  );
}
export default MatchEmpresa;
