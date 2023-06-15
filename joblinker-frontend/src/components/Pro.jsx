import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Match.css";

function Pro() {
  return (
    <>
      <div className="match">
        <Card
          className="card-candidato"
          style={{ width: "22rem", height: "35rem" }}
        >
          <Card.Body>
            <Card.Title>
              <span className="name-user" style={{ color: "transparent" }}>
                Torne-se Star
              </span>
              <div className="img-user">
                <img src="../../files/a.png" alt="" />
              </div>
            </Card.Title>
            <Card.Text>
              <div>
                <h1>Benefícios</h1>
                <p>
                  Você pode visualizar a empresa que oferece a vaga antes do
                  match
                </p>
                <p>
                  Você tem likes e superlikes ilimitados diários para match's
                </p>
                <p>Você tem o perfil em recomendado no JobLinker</p>
              </div>

              <div class="btnpro">
                <Button>Tornar-se Membro</Button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default Pro;
