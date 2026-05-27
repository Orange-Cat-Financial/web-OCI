create database webOCI;
use webOCI;

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(50) not null,
email varchar(50) not null unique,
senha varchar(30) not null,
fotoPerfil varchar(250)
);

create table transacao(
idTransacao int primary key auto_increment,
valor decimal(10,2) not null,
tipo varchar(10) not null,
dataTransacao date not null,
descricao varchar(200),
categoria varchar(20),
fkUsuario int,
constraint fkUsuarioCon foreign key (fkUsuario) references usuario(idUsuario)
);

create table aventuras(
idAventura int primary key auto_increment,
titulo varchar(40),
descricao varchar(300),
imagem varchar(250),
dtPost date ,
locali varchar(45),
fkUsuario int,
constraint fkUsuarioConA foreign key (fkUsuario) references usuario(idUsuario)
);

select * from usuario;




 




        


