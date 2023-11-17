AWS.config.region = 'us-east-2';

var grupoContratanteConfig = {
    UserPoolId: 'us-east-2_qK88eCevU',
    ClientId: 'bes9q1uk41t6lmj0lucauudrh'
}

var grupoFuncionarioConfig = {
    UserPoolId: 'us-east-2_dG2yUwtwN',
    ClientId: '5fn1ba19fqbt21vl66ibiag4fl'
}

var grupoUsuarioConfig = {
    UserPoolId: 'us-east-2_YIeybER0s',
    ClientId: '4ljjvjlcaj7acksvhpg174ta24'
}

function entrar(){


    //debugger;

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var perfil = document.getElementById('perfil').value;

    var dados = {
        Username: email,
        Password: senha
    }

    if(perfil == 'Usuario'){
        var grupo = new AmazonCognitoIdentity.CognitoUserPool(grupoUsuarioConfig);
        var atributo = "Apelido";
    }else if(perfil == 'Funcionario'){
        var grupo = new AmazonCognitoIdentity.CognitoUserPool(grupoFuncionarioConfig);
        var atributo = "Matrícula";
    }else{
        var grupo = new AmazonCognitoIdentity.CognitoUserPool(grupoContratanteConfig);
        var atributo = "CNPJ";
    }

    var auth = new AmazonCognitoIdentity.AuthenticationDetails(dados);
    

    var dadosUsuario = {
        Username: email,
        Pool: grupo
    }


    var cognito = new AmazonCognitoIdentity.CognitoUser(dadosUsuario);

    cognito.authenticateUser(auth, { 

        onSuccess: function(resultado){
            console.log(resultado);
            alert("Logado como: "+ perfil + ", o atributo desse perfil é: " + atributo);
        },
        onFailure: function(erro){
            console.log(erro);
            alert("Usuário não encontrado, rever credenciais.");
        }
    });

}