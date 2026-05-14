var database = require("../database/config");

function buscarValorNoDia(idUsuario, limite_linhas) {

    var instrucaoSql = `select date_format(t1.dataTransacao, '%d/%m') as dataTransacao,
     sum(
	case 
		when t2.tipo = 'despesa' then -t2.valor
        else t2.valor
        end) as SaldoTotal
	from transacao t1 join transacao t2 on t2.dataTransacao <= t1.dataTransacao
    where t1.fkUsuario = ${idUsuario} and t2.fkUsuario = ${idUsuario}
    group by t1.dataTransacao
    order by t1.dataTransacao desc
    limit ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarValorNoDiaRosca(idUsuario) {

    var instrucaoSql = `select categoria, sum(valor) as total from transacao 
where fkUsuario = ${idUsuario} and tipo = 'despesa'
group by categoria order by categoria;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function gastoCategoria(idUsuario, categoria){

    let instrucaoSql = `
        select sum(valor) as total
        from transacao
        where fkUsuario = ${idUsuario} and tipo = 'despesa' and categoria = '${categoria}'
        group by categoria order by categoria;
    `;

    return database.executar(instrucaoSql);

}

function retornar3Linhas(idUsuario){

    let instrucaoSql = `
       select tipo, valor, categoria, DATE_FORMAT(dataTransacao, '%d/%m/%Y') as dataTransacao 
	    from transacao where fkUsuario = ${idUsuario}
        order by idTransacao desc
		limit 3;
    `;

    return database.executar(instrucaoSql);

}




module.exports = {
    buscarValorNoDia: buscarValorNoDia,
    buscarValorNoDiaRosca: buscarValorNoDiaRosca,
    gastoCategoria,
    retornar3Linhas
}
