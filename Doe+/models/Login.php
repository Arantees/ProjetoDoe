<?php
class Login
{
    private int $id;
    private string $usuario;
    private string $senha;
    private Doador $doador;
    private BancoDeSangue $bancoDeSangue;
    
	public function getId(): int 
    {
		return $this->id;
	}

	public function setId(int $id)
    {
		$this->id = $id;		
	}	

	public function getUsuario(): string 
    {
		return $this->usuario;
	}	
	
	public function setUsuario(string $usuario)
    {
		$this->usuario = $usuario;		
	}	
	
	public function getSenha(): string 
    {
		return $this->senha;
	}	
	
	public function setSenha(string $senha)
    {
		$this->senha = $senha;
	}	

	public function getDoador(): Doador
    {
		return $this->doador;
	}	
	
	public function setDoador(Doador $doador)
    {
		$this->doador = $doador;		
	}	
	
	public function getBancoDeSangue(): BancoDeSangue 
    {
		return $this->bancoDeSangue;
	}	
	
	public function setBancoDeSangue(BancoDeSangue $bancoDeSangue)
    {
		$this->bancoDeSangue = $bancoDeSangue;
	}
}

?>