<?php
class BancoDeSangue
{    
    private int $id;
    private string $nome;
    private string $cnpj;
    private string $responsavel;
    private Endereco $endereco;
    
    public function getId():int
    {
        return $this->id;
    }

    public function setId(int $id)
    {
        $this->id = $id;
    }

    public function getNome():string
    {
        return $this->nome;
    }

    public function setNome(string $nome)
    {
        $this->nome = $nome;
    }

    public function getCnjp():string
    {
        return $this->cnpj;
    }

    public function setCnpj(string $cnpj)
    {
        $this->cnpj = $cnpj;
    }

    public function getResponsavel(): string
    {
        return $this->responsavel;
    }
    public function setResponsavel(string $responsavel)
    {
        $this->responsavel = $responsavel;
    }
    public function getEndereco(): Endereco
    {
        return $this->endereco;
    }
    public function setEndereco(Endereco $endereco)
    {
        $this->endereco = $endereco;
    }
}

?>