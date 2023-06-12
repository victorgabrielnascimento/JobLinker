function Cadastro() {
    return (
        <div className="match">
            <div className="login">
                <h2>Cadastre-se</h2>
                <div className="inputs-login">
                    <input type="text" name="nome" id="nome" placeholder="Nome"/>
                    <input type="text" name="cpf" id="cpf" placeholder="CPF"/>
                    <input type="text" name="email" id="email" placeholder="EMAIL"/>
                    <input type="password" name="senha" id="senha" placeholder="SENHA" />
                    <input type="password" name="confirmar-senha" id="confirmar-senha" placeholder="CONFIRME A SENHA" />
                    <div className="endereco">
                        <input type="text" className="w-50" name="rua" id="rua" placeholder="Rua"/>
                        <input type="text" name="numero" id="numero" placeholder="Número"/>
                        <input type="text" name="complemento" id="complemento" placeholder="Complemento"/>
                        <input type="text" className="w-50"  name="cidade" id="cidade" placeholder="Cidade"/>
                        <input type="text" name="estado" id="estado" placeholder="Estado"/>
                        <input type="text" name="cep" id="cep" placeholder="CEP"/>
                    </div>
                </div>
                <div className="btns-login">
                    <button className="btn-login">Registrar</button>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;