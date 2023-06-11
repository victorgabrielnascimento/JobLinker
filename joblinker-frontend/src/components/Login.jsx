function Login() {
    return (
        <div className="match">
            <div className="login">

            
                <h1>Bem vindo</h1>
                <div className="inputs-login">
                    <input type="text" name="cpf" id="cpf" placeholder="CPF"/>
                    <input type="password" name="senha" id="senha" placeholder="SENHA" />
                </div>
                <div className="btns-login">
                    <button className="btn-login">Entrar</button>
                    <button className="cadastro">Registrar agora</button>
                </div>
            </div>
        </div>
    )
}

export default Login;