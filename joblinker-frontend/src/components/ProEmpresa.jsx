import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Match.css";

function ProEmpresa() {
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
                <img src="../../files/icon1.png" alt="" />
              </div>
            </Card.Title>
            <Card.Text>
              <div>
                <h1>Benefícios</h1>
                <p>
                  Você pode visualizar as informações de contatos que o
                  colaborador oferece antes do match
                </p>
                <p>
                  Você tem likes e superlikes ilimitados diários para match's
                </p>
                <p>
                  Você tem recomendações de perfil que se encaixam na vaga no
                  JobLinker
                </p>
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
export default ProEmpresa;
