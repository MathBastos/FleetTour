
AWS.config.region = 'us-east-2';

// var grupoConfig = {
//     UserPoolId: 'us-east-2_sONZzIbW3',
//     ClientId: '3mq7no9bnvkc2rlt2225a07lev'
// } grupo teste

var grupoContratanteConfig = {
    UserPoolId: 'us-east-2_qK88eCevU',
    ClientId: 'bes9q1uk41t6lmj0lucauudrh'
}

function gravarContratante(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var cnpj = document.getElementById('cnpj').value;
    
    var parametros ={
        ClientId: grupoContratanteConfig.ClientId,
        Password: senha,
        Username: email,
        UserAttributes:[
            {
                Name:'custom:cnpj',
                Value: cnpj
            }
        ]
    }

    var cognito = new AWS.CognitoIdentityServiceProvider();

    cognito.signUp(parametros, function(erro, resultado){
        console.log(erro);
        console.log(resultado);

    });

}
