<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200228131401 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE monument_target DROP FOREIGN KEY FK_C953E98B493DA1E5');
        $this->addSql('ALTER TABLE monument_thematic DROP FOREIGN KEY FK_6E65D8FA493DA1E5');
        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB88283EC8B7ADE');
        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB8828398260155');
        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB882836BF700BD');
        $this->addSql('ALTER TABLE monument_target DROP FOREIGN KEY FK_C953E98B158E0B66');
        $this->addSql('ALTER TABLE monument_thematic DROP FOREIGN KEY FK_6E65D8FA2395FCED');
        $this->addSql('ALTER TABLE roles DROP FOREIGN KEY FK_B63E2EC738C751C4');
        $this->addSql('CREATE TABLE blog (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, slug VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP TABLE monument');
        $this->addSql('DROP TABLE monument_target');
        $this->addSql('DROP TABLE monument_thematic');
        $this->addSql('DROP TABLE period');
        $this->addSql('DROP TABLE region');
        $this->addSql('DROP TABLE roles');
        $this->addSql('DROP TABLE status');
        $this->addSql('DROP TABLE target');
        $this->addSql('DROP TABLE thematic');
        $this->addSql('DROP TABLE user');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE monument (id INT AUTO_INCREMENT NOT NULL, region_id INT DEFAULT NULL, status_id INT DEFAULT NULL, period_id INT DEFAULT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, city VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, adress VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, description LONGTEXT CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, thematiques VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, likes INT DEFAULT NULL, dislikes INT DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, latitude NUMERIC(10, 8) DEFAULT NULL, longitude NUMERIC(10, 8) DEFAULT NULL, INDEX IDX_7BB8828398260155 (region_id), INDEX IDX_7BB88283EC8B7ADE (period_id), INDEX IDX_7BB882836BF700BD (status_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE monument_target (monument_id INT NOT NULL, target_id INT NOT NULL, INDEX IDX_C953E98B493DA1E5 (monument_id), INDEX IDX_C953E98B158E0B66 (target_id), PRIMARY KEY(monument_id, target_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE monument_thematic (monument_id INT NOT NULL, thematic_id INT NOT NULL, INDEX IDX_6E65D8FA493DA1E5 (monument_id), INDEX IDX_6E65D8FA2395FCED (thematic_id), PRIMARY KEY(monument_id, thematic_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE period (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE region (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, zipcode INT DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE roles (id INT AUTO_INCREMENT NOT NULL, roles_id INT NOT NULL, UNIQUE INDEX UNIQ_B63E2EC738C751C4 (roles_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE status (id INT AUTO_INCREMENT NOT NULL, status INT NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE target (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, description LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE thematic (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, roles JSON NOT NULL, password VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB882836BF700BD FOREIGN KEY (status_id) REFERENCES status (id)');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB8828398260155 FOREIGN KEY (region_id) REFERENCES region (id)');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB88283EC8B7ADE FOREIGN KEY (period_id) REFERENCES period (id)');
        $this->addSql('ALTER TABLE monument_target ADD CONSTRAINT FK_C953E98B158E0B66 FOREIGN KEY (target_id) REFERENCES target (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_target ADD CONSTRAINT FK_C953E98B493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_thematic ADD CONSTRAINT FK_6E65D8FA2395FCED FOREIGN KEY (thematic_id) REFERENCES thematic (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_thematic ADD CONSTRAINT FK_6E65D8FA493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE roles ADD CONSTRAINT FK_B63E2EC738C751C4 FOREIGN KEY (roles_id) REFERENCES user (id)');
        $this->addSql('DROP TABLE blog');
    }
}
