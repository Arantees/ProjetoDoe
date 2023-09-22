function cadastrarBanco() {
    Swal.fire({
        title: 'Declaração de idoneidade',
        text: 'Declaro para os devidos fins, nos termos da lei, que os dados representados são reais, que a instituição é idônea e que tenho autonomia jurídica/administrativa para representar esta entidade nesta plataforma.',
        icon: 'question',
        showCancelButton: true, 
        confirmButtonText: 'Confirmar', 
        cancelButtonText: 'Cancelar', 
    }).then((result) => {       
        if (result.isConfirmed) {            
            Swal.fire({
                title: 'Sucesso!',
                text: 'O cadastro foi realizado com sucesso',
                icon: 'success', 
                confirmButtonText: 'OK' 
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            //Interromper o submit do botão        
        }
    });
}

function cadastrarDoador() {
    Swal.fire({
        title: 'Você está apto?',
        text: 'Para ser um doador apto você não pode ter contraído as seguintes doenças: Doença de chagas, Sifilis, AIDS, Hepatite B e C e malária, bem como nunca ter feito uso de drogas injetáveis.',
        icon: 'question',
        showCancelButton: true, 
        confirmButtonText: 'Sim', 
        cancelButtonText: 'Não', 
    }).then((result) => {       
        if (result.isConfirmed) {            
            Swal.fire({
                title: 'Sucesso!',
                text: 'O cadastro foi realizado com sucesso',
                icon: 'success', 
                confirmButtonText: 'OK' 
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            //Interromper o submit do botão        
        }
    });
}

function pesquisacep(valor) {

    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if(validacep.test(cep)) {

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);

        } 
        else {
            //cep é inválido.
            limpa_formulário_cep();
            Swal.fire({
                title: 'CEP Inválido!',
                text: 'O CEP informado não é válido. Por favor, confira o campo informado',
                icon: 'error', 
                confirmButtonText: 'OK' 
            });
        }
    } 
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
};

function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('UF').value=("");
}
function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('UF').value=(conteudo.uf);
    } 
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        Swal.fire({
            title: 'CEP não encontrado!',
            text: 'O CEP informado não foi encontrado. Por favor, verifique se não houveram alterações no registro do seu endereço.',
            icon: 'error', 
            confirmButtonText: 'OK' 
        });
    }
}