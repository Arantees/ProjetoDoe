function tipoCadastro() {
    Swal.fire({
        title: 'Que tipo de usuário você é?',
        text: 'Um doador ou um banco de sangue?',
        icon: 'question',
        showCancelButton: true, 
        confirmButtonText: 'Doador', 
        cancelButtonText: 'Banco de Sangue', 
    }).then((result) => {       
        if (result.isConfirmed) {            
            window.location.href = 'cadastro-doador.html'
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            window.location.href = 'cadastro-banco.html'        
        }
    });
}

