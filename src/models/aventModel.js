var database = require("../database/config");

// function listar() {
//     console.log("ACESSEI O aventuras  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
//     var instrucaoSql = `
//         SELECT 
//             a.id AS idAventuras,
//             a.titulo,
//             a.descricao,
//             a.fkUsuario,
//             u.id AS idUsuario,
//             u.nome,
//             u.email,
//             u.senha
//         FROM aventuras a
//             INNER JOIN usuario u
//                 ON a.fkUsuario = u.id;
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function pesquisarDescricao(texto) {
    console.log("ACESSEI O aventuras MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            a.id AS idAventuras,
            a.titulo,
            a.descricao,
            a.fkUsuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aventuras a
            INNER JOIN usuario u
                ON a.fkUsuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O aventuras MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        select titulo, descricao, imagem, dtPost, locali from aventuras where fkUsuario = ${idUsuario} order by idAventura desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, imagem, dtPost, locali,  fkUsuario) {
    console.log("ACESSEI O aventuras MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
                insert into aventuras (titulo, descricao, imagem, dtPost, locali, fkUsuario) values
                ('${titulo}', '${descricao}', '${imagem}', '${dtPost}', '${locali}', ${fkUsuario});    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idAventuras) {
    console.log("ACESSEI O aventuras MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAventuras);
    var instrucaoSql = `
        UPDATE aventuras SET descricao = '${novaDescricao}' WHERE id = ${idAventuras};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idAventuras) {
    console.log("ACESSEI O aventuras MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAventuras);
    var instrucaoSql = `
        DELETE FROM aventuras WHERE id = ${idAventuras};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao: pesquisarDescricao,
    publicar,
    editar,
    deletar
}
