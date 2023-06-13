import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Cadastro() {

    const navigate = useNavigate();
    const [cpf_cnpj, setCpf_cnpj] = useState('');
    const [nome, setNome] = useState('');   
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    // const [confirmarSenha, setConfirmarSenha] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState();

    const handleCpf_cnpjChange = (event) => {
        setCpf_cnpj(event.target.value);
    };
    
      const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleRuaChange = (event) => {
        setRua(event.target.value);
    };

    const handleNumeroChange = (event) => {
        setNumero(event.target.value);
    };

    const handleComplementoChange = (event) => {
        setComplemento(event.target.value);
    };

    const handleCidadeChange = (event) => {
        setCidade(event.target.value);
    };

    const handleEstadoChange = (event) => {
        setEstado(event.target.value);
    };

    const handleCepChange = (event) => {
        setCep(event.target.value);
    };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetch('http://localhost:5000/applicant/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cpf_cnpj, senha, nome, email, endereco: {rua, numero, complemento, cidade, estado, cep}, experience: [{}], idiomas: [{}], interesses: [{}] }),
            }).then((response) => {
                if (response.ok) {
                    
                
                    const data = response.json();
                    const token = data.token;
                    localStorage.setItem('token', token);
                    navigate('/home');
                    setIsLoggedIn(true);
                    console.log(isLoggedIn);
                }
            });
        }
        catch (err) {console.log(err);}
    };
    

    return (
        <div className="match">
            <div className="login">
                <h2>Cadastre-se</h2>
                <form className="inputs-login" onSubmit={handleSubmit}>
                    <input type="text" name="nome" id="nome" value={nome} placeholder="Nome" onChange={handleNomeChange} />
                    <input type="text" name="cpf" id="cpf" value={cpf_cnpj} placeholder="CPF" onChange={handleCpf_cnpjChange} />
                    <input type="text" name="email" id="email" value={email} placeholder="EMAIL" onChange={handleEmailChange} />
                    <input type="password" name="senha" id="senha" value={senha} placeholder="SENHA" onChange={handleSenhaChange} />
                    <input type="password" name="confirmar-senha" id="confirmar-senha" placeholder="CONFIRME A SENHA" />
                    <div className="endereco">
                        <input type="text" className="w-50" name="rua" id="rua" value={rua} placeholder="Rua" onChange={handleRuaChange} />
                        <input type="text" name="numero" id="numero" value={numero} placeholder="Número" onChange={handleNumeroChange} />
                        <input type="text" name="complemento" id="complemento" value={complemento} placeholder="Complemento" onChange={handleComplementoChange} />
                        <input type="text" className="w-50"  name="cidade" id="cidade" value={cidade} placeholder="Cidade" onChange={handleCidadeChange} />
                        <input type="text" name="estado" id="estado" value={estado} placeholder="Estado" onChange={handleEstadoChange} />
                        <input type="text" name="cep" id="cep" value={cep} placeholder="CEP" onChange={handleCepChange} />

                        <div className="btns-login">
                            <button type="submit" className="btn-login">Registrar</button>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
        <div className="btns-login">
          <button className="btn-login">Registrar</button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
