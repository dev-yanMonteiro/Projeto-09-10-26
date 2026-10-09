
/* FUNÇÃO PARA VALIDAR O NOME */
function validarNome(nome) {

    let regraNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // Aceita letras e espaços, inclusive acentos

    return regraNome.test(nome);
}


/* FUNÇÃO PARA VALIDAR A SENHA */
function validarSenha(senha) {

    let temMaiuscula = /[A-Z]/.test(senha);
    let temMinuscula = /[a-z]/.test(senha);
    let temNumero = /[0-9]/.test(senha);
    let temEspecial = /[^A-Za-z0-9\s]/.test(senha);
    let temOitoCaracteres = senha.length >= 8;

    return temMaiuscula && temMinuscula &&
        temNumero && temEspecial && temOitoCaracteres;
}


/* GUARDAR OS DADOS DO CADASTRO */
let usuario = null;


/* CADASTRO */
document.getElementById("formCadastro").addEventListener("submit", function(event) {

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value;

    let mensagem = document.getElementById("mensagem");

    // Verifica se o nome é válido
    if (!validarNome(nome)) {  
        mensagem.textContent =
            "O nome deve conter apenas letras e espaços.";
        mensagem.style.color = "red";
        return;
    }

    // Verifica se a senha é válida
    if (!validarSenha(senha)) {
        mensagem.textContent =
            "A senha precisa ter 8 caracteres, maiúscula, minúscula, número e símbolo.";
        mensagem.style.color = "red";
        return;
    }

    // Guarda os dados para testar o login
    usuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    mensagem.textContent =
        "Cadastro realizado com sucesso, " + nome + "!";

    mensagem.style.color = "green";

    // Limpa os campos
    document.getElementById("formCadastro").reset();

});


/* LOGIN */
document.getElementById("formLogin").addEventListener("submit", function(event) {

    event.preventDefault();

    let email = document.getElementById("emailLogin").value.trim();
    let senha = document.getElementById("senhaLogin").value;

    let mensagemLogin = document.getElementById("mensagemLogin");

    // Verifica se existe um cadastro
    if (usuario === null) {

        mensagemLogin.textContent =
            "Faça seu cadastro primeiro.";

        mensagemLogin.style.color = "red";

    } else if (email === usuario.email && senha === usuario.senha) {

        mensagemLogin.textContent =
            "Bem-vindo, " + usuario.nome + "!";

        mensagemLogin.style.color = "green";

    } else {

        mensagemLogin.textContent =
            "E-mail ou senha incorretos.";

        mensagemLogin.style.color = "red";

    }

});
