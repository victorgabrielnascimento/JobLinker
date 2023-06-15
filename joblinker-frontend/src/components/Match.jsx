import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/Match.css";

function Match() {
  const [perfilIndex, setPerfilIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const perfis = [
    {
      name: "Ambev",
      imgSrc: "../../files/ambev.png",
      academicFormation: "Formação acadêmica",
      description: "Vaga",
      qualities: "Requerimentos",
      age: "DayOff",
      experience: "Experiência",
      courses: "Cursos Oferecidos",
      hobbies: "Benefícios",
    },
    {
      name: "Master",
      imgSrc: "../../files/Master.png",
      academicFormation: "Formação acadêmica",
      description: "Vaga",
      qualities: "Requerimentos",
      age: "DayOff",
      experience: "Experiência",
      courses: "Cursos Oferecidos",
      hobbies: "Benefícios",
    },
    {
      name: "   Walmart",
      imgSrc: "../../files/icon1.png",
      academicFormation: "Formação acadêmica",
      description: "Vaga",
      qualities: "Requerimentos",
      age: "DayOff",
      experience: "Experiência",
      courses: "Cursos Oferecidos",
      hobbies: "Benefícios",
    },
    {
      name: "meta",
      imgSrc: "../../files/Meta.png",
      academicFormation: "Formação acadêmica",
      description: "Vaga",
      qualities: "Requerimentos",
      age: "DayOff",
      experience: "Experiência",
      courses: "Cursos Oferecidos",
      hobbies: "Benefícios",
    },
  ];

  const handleNextProfile = () => {
    if (perfilIndex === 2) {
      setShowPopup(true);
    } else {
      setPerfilIndex((prevIndex) => (prevIndex + 1) % perfis.length);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPerfilIndex((prevIndex) => (prevIndex + 1) % perfis.length);
  };

  const perfilAtual = perfis[perfilIndex];

  const Popup = () => {
    return (
      <div className="popup">
        <div className="popup-content">
          <img
            src="../../files/glow-removebg-preview.png"
            alt="logo"
            style={{ width: "22rem" }}
          />
          <div class="btnpop">
            <Button onClick={handleClosePopup}>LETS CHAT</Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className={`match ${
          showPopup && perfilIndex === 2 ? "popup-open" : ""
        }`}
      >
        <Card className="card-candidato" style={{ width: "22rem" }}>
          <Card.Body>
            <Card.Title>
              <span className="name-user w-100">{perfilAtual.name}</span>
              <div className="img-user">
                <img src={perfilAtual.imgSrc} alt="" />
              </div>
            </Card.Title>
            <Card.Text>
              <div>{perfilAtual.academicFormation}</div>
              <div>{perfilAtual.description}</div>
              <div>{perfilAtual.qualities}</div>
              <div>{perfilAtual.age}</div>
              <div>{perfilAtual.experience}</div>
              <div>{perfilAtual.courses}</div>
              <div>{perfilAtual.hobbies}</div>
            </Card.Text>
            <Button className="perfil-user" variant="link">
              <img src="../../files/Vector.svg" alt="" />
            </Button>
          </Card.Body>
        </Card>
        <div className="btn-match">
          <Button variant="link" onClick={handleNextProfile}>
            <img src="../../files/recusar.png" alt="" />
          </Button>
          <Button className="super-like" variant="link">
            <img src="../../files/superlike.png" alt="" />
          </Button>
          <Button variant="link" onClick={handleNextProfile}>
            <img src="../../files/aceitar.png" alt="" />
          </Button>
        </div>
      </div>
      {showPopup && perfilIndex === 2 && <Popup />}
    </>
  );
}

export default Match;
