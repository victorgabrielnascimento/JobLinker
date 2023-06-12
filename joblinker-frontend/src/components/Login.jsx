import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [cpf_cnpj, setCpf_cnpj] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState();

    const handleCpf_cnpjChange = (event) => {
        setCpf_cnpj(event.target.value);
    };
    
      const handleSenhaChange = (event) => {
        setSenha(event.target.value);
    };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await fetch('http://localhost:5000/management/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cpf_cnpj, senha }),
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

            
                <h1>Bem vindo</h1>
                <form className="inputs-login" onSubmit={handleSubmit}>
                    <input type="text" value={cpf_cnpj} onChange={handleCpf_cnpjChange} name="cpf" id="cpf" placeholder="CPF"/>
                    <input type="Senha" value={senha} onChange={handleSenhaChange} name="senha" id="senha" placeholder="SENHA" />
                
                    <div className="btns-login">
                        <button type="submit" className="btn-login">Entrar</button>
                        <button className="cadastro">Registrar agora</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;