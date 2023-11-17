
AWS.config.region = 'us-east-2';

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

    cognito.signUp(parametros, function (erro, resultado) {

        if (erro == null) {
            alert("Contratante cadastrado com sucesso!")
        } else {
            console.log(erro);
            alert("Erro ao cadastrar contratante, verificar campos obrigatorios")
        }
    });
}
