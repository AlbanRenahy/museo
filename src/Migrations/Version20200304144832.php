<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200304144832 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE monument ADD period_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB88283EC8B7ADE FOREIGN KEY (period_id) REFERENCES period (id)');
        $this->addSql('CREATE INDEX IDX_7BB88283EC8B7ADE ON monument (period_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB88283EC8B7ADE');
        $this->addSql('DROP INDEX IDX_7BB88283EC8B7ADE ON monument');
        $this->addSql('ALTER TABLE monument DROP period_id');
    }
}
