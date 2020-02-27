<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200227135817 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE thematic (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE period (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE target (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, created_at DATETIME DEFAULT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE monument_thematic (monument_id INT NOT NULL, thematic_id INT NOT NULL, INDEX IDX_6E65D8FA493DA1E5 (monument_id), INDEX IDX_6E65D8FA2395FCED (thematic_id), PRIMARY KEY(monument_id, thematic_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE monument_target (monument_id INT NOT NULL, target_id INT NOT NULL, INDEX IDX_C953E98B493DA1E5 (monument_id), INDEX IDX_C953E98B158E0B66 (target_id), PRIMARY KEY(monument_id, target_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE monument_thematic ADD CONSTRAINT FK_6E65D8FA493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_thematic ADD CONSTRAINT FK_6E65D8FA2395FCED FOREIGN KEY (thematic_id) REFERENCES thematic (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_target ADD CONSTRAINT FK_C953E98B493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_target ADD CONSTRAINT FK_C953E98B158E0B66 FOREIGN KEY (target_id) REFERENCES target (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument ADD period_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB88283EC8B7ADE FOREIGN KEY (period_id) REFERENCES period (id)');
        $this->addSql('CREATE INDEX IDX_7BB88283EC8B7ADE ON monument (period_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE monument_thematic DROP FOREIGN KEY FK_6E65D8FA2395FCED');
        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB88283EC8B7ADE');
        $this->addSql('ALTER TABLE monument_target DROP FOREIGN KEY FK_C953E98B158E0B66');
        $this->addSql('DROP TABLE thematic');
        $this->addSql('DROP TABLE period');
        $this->addSql('DROP TABLE target');
        $this->addSql('DROP TABLE monument_thematic');
        $this->addSql('DROP TABLE monument_target');
        $this->addSql('DROP INDEX IDX_7BB88283EC8B7ADE ON monument');
        $this->addSql('ALTER TABLE monument DROP period_id');
    }
}
