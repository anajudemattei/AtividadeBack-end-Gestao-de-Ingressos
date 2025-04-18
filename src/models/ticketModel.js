const pool = require("../config/database");

const getIngressos = async (evento = null) => {
    if (!evento) {
        const result = await pool.query("SELECT * FROM ingressos");
        return result.rows;
    } else {
        const result = await pool.query(
            "SELECT * FROM ingressos WHERE evento ILIKE $1",
            [`%${evento}%`]
        );
        return result.rows;
    }
};

const getIngressoById = async (id) => {
    const result = await pool.query(
        "SELECT * FROM ingressos WHERE id = $1",
        [id]
    );
    return result.rows[0];
};

const createIngresso = async (evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        `INSERT INTO ingressos 
        (evento, local, data_evento, categoria, preco, quantidade_disponivel) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [evento, local, data_evento, categoria, preco, quantidade_disponivel]
    );
    return result.rows[0];
};

const updateIngresso = async (id, evento, local, data_evento, categoria, preco, quantidade_disponivel) => {
    const result = await pool.query(
        `UPDATE ingressos 
        SET evento = $1, local = $2, data_evento = $3, categoria = $4, preco = $5, quantidade_disponivel = $6 
        WHERE id = $7 
        RETURNING *`,
        [evento, local, data_evento, categoria, preco, quantidade_disponivel, id]
    );

    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado." };
    }

    return result.rows[0];
};

const updateQuantidade = async (id, novaQuantidade) => {
    const result = await pool.query(
        "UPDATE ingressos SET quantidade_disponivel = $1 WHERE id = $2 RETURNING *",
        [novaQuantidade, id]
    );
    return result.rows[0];
};

const deleteIngresso = async (id) => {
    const result = await pool.query(
        "DELETE FROM ingressos WHERE id = $1 RETURNING *",
        [id]
    );

    if (result.rowCount === 0) {
        return { error: "Ingresso não encontrado." };
    }

    return { message: "Ingresso excluído." };
};

const createVenda = async (id_ingresso, quantidade_disponivel) => {
    const query = "INSERT INTO vendas (id_ingresso, quantidade_disponivel) VALUES ($1, $2) RETURNING *";
    const values = [id_ingresso, quantidade_disponivel];
    const result = await pool.query(query, values);
    return result.rows[0];
};

module.exports = { getIngressos, getIngressoById, createIngresso, updateIngresso, updateQuantidade, deleteIngresso, createVenda };
