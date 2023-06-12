import Card from 'react-bootstrap/Card';
import '../styles/Match.css';
import Menu from './Menu';

function PerfilCandidato() {
return (
    <>
    <div className='match'>
     <Card className='card-candidato' style={{ width: '23rem', height: '35rem'}}>
      <Card.Body>
        <Card.Title>
            <span className='name-user'>User Name</span>
            <div className='img-user-perfil'>
              <img src="../../files/a.png" alt="" />
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
      </Card.Body>
    </Card>
        <Menu></Menu>
    </div>
    </>
)
}
export default PerfilCandidato;