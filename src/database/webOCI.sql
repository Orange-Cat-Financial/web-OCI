create database webOCI;
use webOCI;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50) not null,
email varchar(50) not null unique,
senha varchar(30) not null,
fotoPerfil varchar(250)
);

create table categoria(
idCategoria int primary key auto_increment,
nome varchar(20) not null
);

create table transacao(
idTransacao int primary key auto_increment,
valor int not null,
tipo varchar(10) not null,
dataTransacao date not null,
formaPagamento varchar(20),
descricao varchar(200),
fkUsuario int,
fkCategoria int,
constraint fkUsuarioCon foreign key (fkUsuario) references usuario(idUsuario),
constraint fkCategoriaCon foreign key (fkCategoria) references categoria(idCategoria)
);

show tables;