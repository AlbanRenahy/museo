<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200304184744 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE monument_thematic (monument_id INT NOT NULL, thematic_id INT NOT NULL, INDEX IDX_6E65D8FA493DA1E5 (monument_id), INDEX IDX_6E65D8FA2395FCED (thematic_id), PRIMARY KEY(monument_id, thematic_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE monument_thematic ADD CONSTRAINT FK_6E65D8FA493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_thematic ADD CONSTRAINT FK_6E65D8FA2395FCED FOREIGN KEY (thematic_id) REFERENCES thematic (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE monument_thematic');
    }
}
