function cadastrar() {
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