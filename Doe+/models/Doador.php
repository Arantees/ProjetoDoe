<?php
class Doador
{
    private int $id;
    private string $nome;
    private string $cpf;
    private DateTime $dataNascimento;
    private string $tipoSanguineo;
    private float $peso;
    private Endereco $endereco;

    public function getId(): int
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

    public function getDataNascimento():DateTime
    {
        return $this->dataNascimento;
    }

    public function setDataNascimento(Datetime $dataNascimento)
    {
        $this->$dataNascimento = $dataNascimento;
    }    

    public function getTipoSanguineo():string
    {
        return $this->tipoSanguineo;
    }

    public function setTipoSanguineo(string $tipoSanguineo)
    {
        $this->tipoSanguineo = $tipoSanguineo;
    }

    public function getPeso():float
    {
        return $this->peso;
    }

    public function setPeso(float $peso)
    {
        $this->peso = $peso;
    }
    
    public function getEndereco():Endereco
    {
        return $this->endereco;
    }

    public function setEndereco(Endereco $endereco)
    {
        $this->endereco = $endereco;
    }
}
?>