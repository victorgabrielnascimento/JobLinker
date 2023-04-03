import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Match.css';
import Menu from './Menu';
function PerfilCandidato() {
return (
    <>
    <div className='match'>
        <div className="btn-back" >
        <Button variant='link'><img src="../../files/icon-back.svg" alt="" /></Button>
        </div>
     <Card className='card-candidato' style={{ width: '23rem', height: '40rem'}}>
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
      </Card.Body>
    </Card>
        <Menu></Menu>
    </div>
    </>
)
}
export default PerfilCandidato;