CREATE TABLE `programming_languages`
(
    `id`    INT(11) NOT NULL auto_increment,
    `name`  VARCHAR(255) NOT NULL,
    `released_year` INT NOT NULL,
    `githut_rank`   INT NULL,
    `pypl_rank`     INT NULL,
    `tiobe_rank`    INT NULL,
    `created_at`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at`    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE  `idx_name_unique`   (`name`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;