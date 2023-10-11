<?php
class Contato
{
    private int $id;
    private string $tipo;
    private string $descricao;
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
	public function getTipo(): string 
    {
		return $this->tipo;
	}	
	public function setTipo(string $tipo)
    {
		$this->tipo = $tipo;
	}
	
	public function getDescricao(): string 
    {
		return $this->descricao;
	}	
	
	public function setDescricao(string $descricao)
    {
		$this->descricao = $descricao;		
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
		return $this;
	}
}

?>