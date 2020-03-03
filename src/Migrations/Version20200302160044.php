<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200302160044 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE author (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE monument_thematic (monument_id INT NOT NULL, thematic_id INT NOT NULL, INDEX IDX_6E65D8FA493DA1E5 (monument_id), INDEX IDX_6E65D8FA2395FCED (thematic_id), PRIMARY KEY(monument_id, thematic_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE monument_thematic ADD CONSTRAINT FK_6E65D8FA493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_thematic ADD CONSTRAINT FK_6E65D8FA2395FCED FOREIGN KEY (thematic_id) REFERENCES thematic (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE region ADD monument_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE region ADD CONSTRAINT FK_F62F176493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id)');
        $this->addSql('CREATE INDEX IDX_F62F176493DA1E5 ON region (monument_id)');
        $this->addSql('ALTER TABLE user ADD firstname VARCHAR(255) DEFAULT NULL, ADD lastname VARCHAR(255) DEFAULT NULL, ADD picture VARCHAR(255) DEFAULT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649E7927C74 ON user (email)');
        $this->addSql('ALTER TABLE period ADD monument_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE period ADD CONSTRAINT FK_C5B81ECE493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id)');
        $this->addSql('CREATE INDEX IDX_C5B81ECE493DA1E5 ON period (monument_id)');
        $this->addSql('ALTER TABLE target ADD monument_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE target ADD CONSTRAINT FK_466F2FFC493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id)');
        $this->addSql('CREATE INDEX IDX_466F2FFC493DA1E5 ON target (monument_id)');
        $this->addSql('ALTER TABLE monument DROP thematic');
        $this->addSql('ALTER TABLE blog CHANGE slug slug VARCHAR(255) DEFAULT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE author');
        $this->addSql('DROP TABLE monument_thematic');
        $this->addSql('ALTER TABLE blog CHANGE slug slug VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE monument ADD thematic VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE period DROP FOREIGN KEY FK_C5B81ECE493DA1E5');
        $this->addSql('DROP INDEX IDX_C5B81ECE493DA1E5 ON period');
        $this->addSql('ALTER TABLE period DROP monument_id');
        $this->addSql('ALTER TABLE region DROP FOREIGN KEY FK_F62F176493DA1E5');
        $this->addSql('DROP INDEX IDX_F62F176493DA1E5 ON region');
        $this->addSql('ALTER TABLE region DROP monument_id');
        $this->addSql('ALTER TABLE target DROP FOREIGN KEY FK_466F2FFC493DA1E5');
        $this->addSql('DROP INDEX IDX_466F2FFC493DA1E5 ON target');
        $this->addSql('ALTER TABLE target DROP monument_id');
        $this->addSql('DROP INDEX UNIQ_8D93D649E7927C74 ON user');
        $this->addSql('ALTER TABLE user DROP firstname, DROP lastname, DROP picture');
    }
}
