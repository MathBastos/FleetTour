
AWS.config.region = 'us-east-2';

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

        if(erro == null){
            alert("Usuario cadastrado com sucesso!")
        }else{
            console.log(erro);
            alert("Erro ao cadastrar usuario, verificar campos obrigatorios")
        }
    });

}