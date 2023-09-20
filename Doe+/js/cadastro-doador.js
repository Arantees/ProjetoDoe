function cadastrar() {
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