
AWS.config.region = 'us-east-2';

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

    cognito.signUp(parametros, function (erro, resultado) {

        if (erro == null) {
            alert("Funcionario cadastrado com sucesso!")
        } else {
            console.log(erro);
            alert("Erro ao cadastrar Funcionario, verificar campos obrigatorios")
        }
    });

}