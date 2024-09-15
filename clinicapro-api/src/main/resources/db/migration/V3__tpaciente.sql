CREATE TABLE pessoa (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255),
    data_nascimento DATE,
    documento VARCHAR(14),
    email VARCHAR(255),
    telefone VARCHAR(255),
    data_cadastro TIMESTAMP
);
