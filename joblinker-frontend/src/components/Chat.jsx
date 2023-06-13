import Card from "react-bootstrap/Card";
import "../styles/Match.css";

function Chat() {
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
                <img src="../../files/a.png" alt="" />
              </div>
            </Card.Title>
            <Card.Text>
              <div className="mensagens">
                <div className="mensagem-1">Boa noite</div>
                <div className="mensagem-2">Boa noite</div>
                <div className="mensagem-1">Gostei muito do seu perfil</div>
                <div className="mensagem-2">Formação acadêmica</div>
                <div className="mensagem-1">Formação acadêmica</div>
                <div className="mensagem-2">Formação acadêmica</div>
                <div className="mensagem-1">Formação acadêmica</div>
                <div className="mensagem-2">Formação acadêmica</div>
              </div>
              <div className="input-msg">
                <textarea
                  name="mensagem"
                  id="mensagem"
                  cols="27"
                  rows="1"
                ></textarea>
                <button type="submit"> Enviar</button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default Chat;
