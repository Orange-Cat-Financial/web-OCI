var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            t.idTransacao AS idTransacao,
            t.valor,
            t.tipo,
            t.dataTransacao,
            t.categoria,
            t.descricao,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM transacao t
            INNER JOIN usuario u
                ON t.fkUsuario = u.idUsuario 
                order by t.idTransacao desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario, tipo) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            t.idTransacao,
            t.valor,
            t.tipo,
            t.dataTransacao,
            t.categoria,
            t.descricao,
            u.idUsuario AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM transacao t
             JOIN usuario u
                ON t.fkUsuario = u.idUsuario
        WHERE u.idUsuario = ${idUsuario} and t.tipo like '%${tipo}%'
        order by idTransacao desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function listarDinheiroTotalPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        select 
		sum( case 
			when tipo = 'despesa' then valor
            else 0 end) as despesa,
		sum(case 
			when tipo = 'receita' then valor
            else 0 end) as receita,
        sum(case 
        when tipo = 'despesa' then -valor 
        else valor end) as valorTotal 
        from transacao where fkUsuario = ${idUsuario} ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function publicar(valor, tipo, dataTransacao, descricao, categoria, idUsuario) {
    var instrucaoSql = `
        INSERT INTO transacao (valor, tipo, dataTransacao, descricao, categoria, fkUsuario) VALUES (${valor}, '${tipo}', '${dataTransacao}', '${descricao}', '${categoria}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editar(novaDescricao, idAviso) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", novaDescricao, idAviso);
    var instrucaoSql = `
        UPDATE aviso SET descricao = '${novaDescricao}' WHERE id = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idTransferencia) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idAviso);
    var instrucaoSql = `
        DELETE FROM transacao WHERE idTransacao = ${idAviso};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    listarDinheiroTotalPorUsuario,
    pesquisarDescricao,
    publicar,
    editar,
    deletar
}
