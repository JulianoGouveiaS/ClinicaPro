INSERT INTO pessoa (nome, data_nascimento, documento, email, telefone, data_cadastro) values ('Matheus Maske', TO_DATE('07/05/1997', 'DD/MM/YYYY'), '06143264198', 'matheus.maske.m@gmail.com', '34991669775', NOW());
INSERT INTO usuario (id_pessoa, login, senha, ativo, ultimo_login, usuario_temporario) values (1, 'mmaske', '$2a$12$KXBDJ06i1wAXB9U31YsRk.HjHoUblDpq2Y9t1Bi4tFsLbLgyY.wDq', true, NOW(), false);
INSERT INTO permissao_usuario (id_usuario, id_permissao) values (1, 1);

INSERT INTO pessoa (nome, data_nascimento, documento, email, telefone, data_cadastro) values ('Juliano Gouveia Santos', TO_DATE('05/05/1997', 'DD/MM/YYYY'), '10287509605', 'julianogouveia93@gmail.com', '34991350403', NOW());
INSERT INTO usuario (id_pessoa, login, senha, ativo, ultimo_login, usuario_temporario) values (2, 'juliano', '$2a$12$mWRxd3ZnMllYktto3KAqC.YGJ.2KI86m9t97IFQ.xLDuWGMIY5jiC', true, NOW(), false);
INSERT INTO permissao_usuario (id_usuario, id_permissao) values (2, 1);
