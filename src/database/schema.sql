CREATE DATABASE bilheteria;

\c bilheteria;

CREATE TABLE ingressos (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(225) NOT NULL,
    local VARCHAR(225) NOT NULL,
    data_evento DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL (10,2) NOT NULL,
    quantidade_disponivel INTEGER NOT NULL
);

INSERT INTO ingressos (evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES 
('Show Lana Del Rey', 'Rio de Janeiro', '2025-11-18', 'Camarote', 300.00, 500),
('Show Lana Del Rey', 'Rio de Janeiro', '2025-11-18', 'Pista', 100.00, 1000),
('Show Lana Del Rey', 'Rio de Janeiro', '2025-11-18', 'Pista VIP', 200.00, 700),
('Show Lana Del Rey', 'Rio de Janeiro', '2025-11-18', 'Arquibancada', 90.00, 900);