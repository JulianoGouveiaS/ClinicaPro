CREATE TABLE permissao
(
    id                SERIAL PRIMARY KEY,
    descricao         VARCHAR(255),
    permissao_publica BOOLEAN DEFAULT FALSE
);

CREATE TABLE pessoa
(
    id              SERIAL PRIMARY KEY,
    nome            VARCHAR(255),
    data_nascimento DATE,
    documento       VARCHAR(14),
    email           VARCHAR(255),
    telefone        VARCHAR(255),
    data_cadastro   TIMESTAMP
);

CREATE TABLE usuario
(
    id                 SERIAL PRIMARY KEY,
    id_pessoa          BIGINT REFERENCES pessoa (id),
    login              VARCHAR(255),
    senha              VARCHAR(500),
    ativo              BOOLEAN DEFAULT FALSE,
    ultimo_login       TIMESTAMP,
    usuario_temporario BOOLEAN DEFAULT FALSE
);

CREATE TABLE permissao_usuario
(
    id           SERIAL PRIMARY KEY,
    id_usuario   BIGINT REFERENCES usuario (id),
    id_permissao BIGINT REFERENCES permissao (id)
);

CREATE TABLE recuperacao_senha
(
    id               SERIAL PRIMARY KEY,
    id_pessoa        BIGINT REFERENCES pessoa (id),
    login            VARCHAR(255),
    token            VARCHAR(5),
    data_confirmacao TIMESTAMP
);

CREATE TABLE endereco
(
    id          SERIAL PRIMARY KEY,
    id_pessoa   BIGINT REFERENCES pessoa (id),
    logradouro  VARCHAR(255) NOT NULL,
    cidade      VARCHAR(255),
    estado      VARCHAR(255),
    bairro      VARCHAR(255),
    numero      VARCHAR(255),
    complemento VARCHAR(255),
    referencia  VARCHAR(255)
);
CREATE TABLE paciente
(
    id            SERIAL PRIMARY KEY,
    tipo_captacao VARCHAR(255),
    FOREIGN KEY (id) REFERENCES Pessoa (id)
);

CREATE TABLE profissional
(
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (id) REFERENCES Pessoa (id)
);

CREATE TABLE familiar_paciente
(
    id          SERIAL PRIMARY KEY,
    tipo        VARCHAR(255),
    id_familiar BIGINT,
    id_paciente BIGINT,
    FOREIGN KEY (id_paciente) REFERENCES Paciente (id),
    FOREIGN KEY (id_familiar) REFERENCES Pessoa (id)
);

CREATE TABLE profissional_paciente
(
    id              SERIAL PRIMARY KEY,
    id_profissional BIGINT,
    id_paciente     BIGINT,
    FOREIGN KEY (id_paciente) REFERENCES Paciente (id),
    FOREIGN KEY (id_profissional) REFERENCES Profissional (id)
);
