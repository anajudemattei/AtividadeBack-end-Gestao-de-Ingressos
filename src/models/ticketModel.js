const pool = require("../config/database");

const getIngressos = async () => {
    const result = await pool.query("SELECT * FROM ingressos");
    return result.rows;
};


const getIngressoById = async (id) => {
    const result = await pool.query("SELECT * FROM ingressos WHERE id = $1", [id]);
    return result.rows[0];
};


const createIngresso = async (evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        "INSERT INTO ingressos (evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",


        [evento, local, data_evento, categoria, preco, quantidade_disponivel]
    );
    return result.rows[0];
};


const updateIngresso = async (id, evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        "UPDATE ingressos SET evento = $1, local = $2, data_evento = $3, categoria = $4, preco = $5, quantidade_disponivel = $6 WHERE id = $7 RETURNING *",
        [evento, local, data_evento, categoria, preco, quantidade_disponivel, id]
    );

    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado." };
    }

    return result.rows[0];
};


const deleteIngresso = async (id) => {
    const result = await pool.query("DELETE FROM ingressos WHERE id = $1 RETURNING *", [id]);


    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado." };
    }


    return { message: "Ingresso excluído." };
};

const createVenda = async (id, quantidade_requerida, evento) => {
    const ticket = await pool.query("SELECT * FROM tickets WHERE id = $1", [id]);
    let quantidade_disponivel = ticket.rows[0].quantidade_disponivel;

    if (quantidade_disponivel < quantidade_requerida) {
        return { error: "Ingressos insuficientes para a venda." };
    }
    quantidade_disponivel -= quantidade_requerida;
    const result = await pool.query(
        "UPDATE tickets SET quantidade_disponivel = $2 WHERE id = $1 RETURNING *",
        [id, quantidade_disponivel]
    );
    return { message: "Compra realizada com sucesso!", quantidade_disponivel, quantidade_requerida};
};


module.exports = { getIngressos, getIngressoById, createIngresso, updateIngresso, deleteIngresso, createVenda };