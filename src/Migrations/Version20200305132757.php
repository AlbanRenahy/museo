<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200305132757 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE monument_target (monument_id INT NOT NULL, target_id INT NOT NULL, INDEX IDX_C953E98B493DA1E5 (monument_id), INDEX IDX_C953E98B158E0B66 (target_id), PRIMARY KEY(monument_id, target_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE monument_target ADD CONSTRAINT FK_C953E98B493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_target ADD CONSTRAINT FK_C953E98B158E0B66 FOREIGN KEY (target_id) REFERENCES target (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE monument_target');
    }
}
