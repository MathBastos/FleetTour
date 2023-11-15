AWS.config.region = 'us-east-2';

// var grupoConfig = {
//     UserPoolId: 'us-east-2_sONZzIbW3',
//     ClientId: '3mq7no9bnvkc2rlt2225a07lev'
// } grupo teste

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

    // if(perfil == 'Usuario'){
    //     var grupo = new AmazonCognitoIdentity.CognitoUserPool(grupoUsuarioConfig);
    //     console.log("deu boa");
    // }else if(perfil == 'Funcionario'){
    //     var grupo = new AmazonCognitoIdentity.CognitoUserPool(grupoFuncionarioConfig);
    // }else{
    //     var grupo = new AmazonCognitoIdentity.CognitoUserPool(grupoContratanteConfig);
    // }
    
    var grupo = new AmazonCognitoIdentity.CognitoUserPool(grupoUsuarioConfig);

    var auth = new AmazonCognitoIdentity.AuthenticationDetails(dados);
    

    var dadosUsuario = {
        Username: email,
        Pool: grupo
    }


    var cognito = new AmazonCognitoIdentity.CognitoUser(dadosUsuario);

    cognito.authenticateUser(auth, { 

        onSuccess: function(resultado){
            console.log(resultado);
        },
        onFailure: function(erro){
            console.log(erro);
        }
    });

}