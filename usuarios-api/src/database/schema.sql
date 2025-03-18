CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    evento VARCHAR(255) NOT NULL,
    local VARCHAR(255) NOT NULL,
    data_evento DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    quantidade_disponivel INTEGER NOT NULL
);

INSERT INTO ingressos (id, evento, local, data_evento, categoria, preco, quantidade_disponivel) VALUES 
    ('', 'alice.silva@email.com'),
    ('Carla Mendes', 'carla.mendes@email.com');
