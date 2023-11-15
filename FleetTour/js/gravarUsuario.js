
AWS.config.region = 'us-east-2';

// var grupoConfig = {
//     UserPoolId: 'us-east-2_sONZzIbW3',
//     ClientId: '3mq7no9bnvkc2rlt2225a07lev'
// } grupo teste

var grupoUsuarioConfig = {
    UserPoolId: 'us-east-2_YIeybER0s',
    ClientId: '4ljjvjlcaj7acksvhpg174ta24'
}

function gravarUsuario(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
    var apelido = document.getElementById('apelido').value;
    
    var parametros ={
        ClientId: grupoUsuarioConfig.ClientId,
        Password: senha,
        Username: email,
        UserAttributes:[
            {
                Name:'nickname',
                Value: apelido
            }
        ]
    }

    var cognito = new AWS.CognitoIdentityServiceProvider();

    cognito.signUp(parametros, function(erro, resultado){
        console.log(erro);
        console.log(resultado);

    });

}