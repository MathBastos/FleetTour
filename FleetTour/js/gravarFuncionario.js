
AWS.config.region = 'us-east-2';

// var grupoConfig = {
//     UserPoolId: 'us-east-2_sONZzIbW3',
//     ClientId: '3mq7no9bnvkc2rlt2225a07lev'
// }

var grupoFuncionarioConfig = {
    UserPoolId: 'us-east-2_dG2yUwtwN',
    ClientId: '5fn1ba19fqbt21vl66ibiag4fl'
}

function gravarFuncionario(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var matricula = document.getElementById('matricula').value;
    
    var parametros ={
        ClientId: grupoFuncionarioConfig.ClientId,
        Password: senha,
        Username: email,
        UserAttributes:[
            {
                Name:'custom:matricula',
                Value: matricula
            }
        ]
    }

    var cognito = new AWS.CognitoIdentityServiceProvider();

    cognito.signUp(parametros, function(erro, resultado){
        console.log(erro);
        console.log(resultado);

    });

}