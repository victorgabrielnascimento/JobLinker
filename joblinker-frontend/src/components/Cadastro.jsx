function Cadastro() {
  return (
    <div className="match">
      <div className="login">
        <h1>Bem-vindo</h1>
        <h2>Cadastre-se</h2>
        <div className="inputs-login">
          <input type="text" name="nome" id="nome" placeholder="Nome" />
          <input type="text" name="cpf" id="cpf" placeholder="CPF" />
          <input type="text" name="email" id="email" placeholder="EMAIL" />
          <input type="password" name="senha" id="senha" placeholder="SENHA" />
          <input
            type="password"
            name="confirmar-senha"
            id="confirmar-senha"
            placeholder="CONFIRME A SENHA"
          />
        </div>
        <div className="btns-login">
          <button className="btn-login">Registrar</button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
