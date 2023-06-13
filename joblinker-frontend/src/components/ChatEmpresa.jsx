import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Match.css";

function ChatEmpresa() {
  return (
    <>
      <div className="match">
        <Card
          className="card-candidato"
          style={{ width: "22rem", height: "35rem" }}
        >
          <Card.Body>
            <Card.Title>
              <span className="name-user">User Name</span>
              <div className="img-user">
                <img src="../../files/icon1.png" alt="" />
              </div>
            </Card.Title>
            <Card.Text>
              <div className="mensagens">
                <div className="mensagem-2">Boa noite</div>
                <div className="mensagem-1">Boa noite</div>
                <div className="mensagem-2">
                  Ficamos interessados no seu perfil
                </div>
                <div className="mensagem-1">Sério? Fico feliz em saber</div>
                <div className="mensagem-2">Agendaremos uma entrevista</div>
                <div className="mensagem-1">Perfeito! Fico no aguardo</div>
                <div className="mensagem-2">Logo vou informa-la melhor!</div>
              </div>
              <div className="input-msg">
                <textarea
                  name="mensagem"
                  id="mensagem"
                  cols="27"
                  rows="1"
                ></textarea>
                <button type="submit">Enviar</button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default ChatEmpresa;
