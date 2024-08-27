CREATE TABLE usuario
(
    id              INT                            NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cpf             VARCHAR(11)                    NOT NULL,
    nome            VARCHAR(255)                   NOT NULL,
    email           VARCHAR(255)                   NOT NULL,
    data_nascimento DATETIME                       NOT NULL,
    genero          ENUM ('masculino', 'feminino') NOT NULL,
    created_at      DATETIME                       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME                       NOT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE pesquisa
(
    id         INT                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome       VARCHAR(255)        NOT NULL,
    ativo      TINYINT(1) UNSIGNED NOT NULL,
    created_at DATETIME            NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuario_pesquisa
(
    id          INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_usuario  INT NOT NULL,
    id_pesquisa INT NOT NULL,
    CONSTRAINT fk_usuario_pesquisa_id_usuario FOREIGN KEY (id_usuario) REFERENCES usuario (id),
    CONSTRAINT fk_usuario_pesquisa_id_pesquisa FOREIGN KEY (id_pesquisa) REFERENCES pesquisa (id)
);

CREATE TABLE pergunta
(
    id          INT                 NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pergunta    VARCHAR(500)        NOT NULL,
    ativo       TINYINT(1) UNSIGNED NOT NULL,
    obrigatorio TINYINT(1) UNSIGNED NOT NULL,
    created_at  DATETIME            NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME            NOT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE resposta
(
    id         INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    resposta   VARCHAR(500) NOT NULL,
    created_at DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME     NOT NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE pergunta_resposta
(
    id          INT          NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_pesquisa INT          NOT NULL,
    id_pergunta INT          NOT NULL,
    id_resposta INT          NOT NULL,
    CONSTRAINT fk_pergunta_resposta_pesquisa_id_pesquisa FOREIGN KEY (id_pesquisa) REFERENCES pesquisa (id),
    CONSTRAINT fk_pergunta_resposta_pergunta_id_pergunta FOREIGN KEY (id_pergunta) REFERENCES pergunta (id),
    CONSTRAINT fk_pergunta_resposta_resposta_id_resposta FOREIGN KEY (id_resposta) REFERENCES resposta (id)
);

# ALTER TABLE pergunta_resposta DROP FOREIGN KEY fk_pergunta_resposta_pergunta_id_pergunta;
# ALTER TABLE pergunta_resposta DROP FOREIGN KEY fk_pergunta_resposta_pesquisa_id_pesquisa;
# ALTER TABLE pergunta_resposta DROP FOREIGN KEY fk_pergunta_resposta_resposta_id_resposta;
# ALTER TABLE usuario_pesquisa DROP FOREIGN KEY fk_usuario_pesquisa_id_usuario;
# ALTER TABLE usuario_pesquisa DROP FOREIGN KEY fk_usuario_pesquisa_id_pesquisa;
#
# DROP TABLE pergunta_resposta;
# DROP TABLE pergunta;
# DROP TABLE resposta;
# DROP TABLE usuario_pesquisa;
# DROP TABLE pesquisa;
# DROP TABLE usuario;

