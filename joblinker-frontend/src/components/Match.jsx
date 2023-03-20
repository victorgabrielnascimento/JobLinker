import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Match.css'
import Menu from './Menu'
function Match() {
return (
    <>
    <div className='match'>
     <div className='logo-empresa'>JobLinker <img src="../../files/icon-work-purple.svg" alt="" /></div>
     <Card className='card-candidato' style={{ width: '23rem', height: '30rem'}}>
      <Card.Body>
        <Card.Title>
            <span className='name-user'>Jair Bolsonaro</span>
            <img className='img-user' src="../../files/bolsonaro.png" alt="" />
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
        <Menu></Menu>
    </div>
    </>
)
}
export default Match;