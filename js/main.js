$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('form').validate({
        rules: {
            cpf: {
                required: true
            },
            telefone: {
                required: true
            },
            cep:{
                required: true
            }
        },
        messages: {
            cpf: 'Por favor, insira o CPF.',
            telefone: 'Por favor, insira o seu telefone.',
            cep: 'Por favor, insira o seu CEP.'
        }        
    });
});
