CREATE TABLE permissao (
    id BIGSERIAL PRIMARY KEY,
    descricao VARCHAR(255),
    permissao_publica BOOLEAN
);

CREATE TABLE pessoa (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(255),
    data_nascimento DATE,
    documento VARCHAR(14),
    email VARCHAR(255),
    telefone VARCHAR(255)
);

CREATE TABLE usuario (
    id BIGSERIAL PRIMARY KEY,
    id_pessoa BIGINT REFERENCES pessoa(id),
    login VARCHAR(255),
    senha VARCHAR(500),
    ativo BOOLEAN,
    ultimo_login TIMESTAMP,
    indicador_usuario_temporario BOOLEAN
);

CREATE TABLE permissao_usuario (
    id BIGSERIAL PRIMARY KEY,
    id_usuario BIGINT REFERENCES usuario(id),
    id_permissao BIGINT REFERENCES permissao(id)
);

CREATE TABLE recuperacao_senha (
    id BIGSERIAL PRIMARY KEY,
    id_pessoa BIGINT REFERENCES pessoa(id),
    login VARCHAR(255),
    token VARCHAR(5),
    data_confirmacao TIMESTAMP
);

CREATE TABLE endereco (
    id BIGSERIAL PRIMARY KEY,
    id_pessoa BIGINT REFERENCES pessoa(id),
    logradouro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255),
    estado VARCHAR(255),
    bairro VARCHAR(255),
    numero VARCHAR(255),
    complemento VARCHAR(255),
    referencia VARCHAR(255)
);