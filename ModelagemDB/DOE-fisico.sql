/* DOE-logico: */

CREATE TABLE Doador (
    Id int AUTO_INCREMENT PRIMARY KEY,
    Nome varchar(150) NOT NULL,
    CPF char(11) NOT NULL,
    DataNascimento Date,
    TipoSanguineo varchar(3) NOT NULL,
    Peso Decimal (12,2),
    Endereco int
);

CREATE TABLE Contato (
    Id int AUTO_INCREMENT PRIMARY KEY,
    Tipo varchar(30) NOT NULL,
    Descricao varchar(150),
    Doador int,
    BancoSangue int
);

CREATE TABLE Endereco (
    Id int AUTO_INCREMENT PRIMARY KEY,
    Logradouro varchar(150),
    Numero varchar(6),
    Bairro varchar(100),
    Cidade varchar(100),
    CEP char(8),
    UF char(2),
    Complemento varchar(100)
);

CREATE TABLE Login (
    Id int AUTO_INCREMENT PRIMARY KEY,
    Usuario varchar(30) NOT NULL,
    Senha varchar(30),
    Doador int,
    BancoSangue int
);

CREATE TABLE BancoSangue (
    Id int AUTO_INCREMENT PRIMARY KEY,
    CNPJ char(14),
    Responsavel varchar(100),
    CPF_Responsavel char(11),
    Endereco int
);
 
ALTER TABLE Doador ADD CONSTRAINT FK_Doador_1
    FOREIGN KEY (Endereco)
    REFERENCES Endereco (Id);
 
ALTER TABLE Contato ADD CONSTRAINT FK_Contato_2
    FOREIGN KEY (Doador)
    REFERENCES Doador (Id);
 
ALTER TABLE Contato ADD CONSTRAINT FK_Contato_3
    FOREIGN KEY (BancoSangue)
    REFERENCES BancoSangue (Id);
 
ALTER TABLE Login ADD CONSTRAINT FK_Login_2
    FOREIGN KEY (Doador)
    REFERENCES Doador (Id);
 
ALTER TABLE Login ADD CONSTRAINT FK_Login_3
    FOREIGN KEY (BancoSangue)
    REFERENCES BancoSangue (Id);
 
ALTER TABLE BancoSangue ADD CONSTRAINT FK_BancoSangue_2
    FOREIGN KEY (Endereco)
    REFERENCES Endereco (Id);