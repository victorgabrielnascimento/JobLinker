import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Match.css';

function Match() {
return (
    <>
    <div className='match'>
     <Card className='card-candidato' style={{ width: '22rem'}}>
      <Card.Body>
        <Card.Title>
            <span className='name-user'>User Name</span>
            <div className='img-user'>
              <img src="" alt="" />
            </div>
        </Card.Title>
        <Card.Text>
          <div>Formação acadêmica</div>
          <div>Descrição</div>
          <div>Qualidades</div>
          <div>Informação relevante</div>
          <div>Informação relevante</div>
          <div>Informação relevante</div>
          <div>Informação relevante</div>
          <div>Informação relevante</div>
          <div>Informação relevante</div>
        </Card.Text>
        <Button className="perfil-user" variant="link"> <img src="../../files/Vector.svg" alt="" /></Button>
      </Card.Body>
    </Card>
        <div className="btn-match">
        <Button variant="link"><img src="../../files/recusar.png" alt="" /></Button>
        <Button variant="link"><img src="../../files/aceitar.png" alt="" /> </Button>
        </div>
    </div>
    </>
)
}
export default Match;