<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200309160348 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE monument_period (monument_id INT NOT NULL, period_id INT NOT NULL, INDEX IDX_4A84D8B9493DA1E5 (monument_id), INDEX IDX_4A84D8B9EC8B7ADE (period_id), PRIMARY KEY(monument_id, period_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE monument_period ADD CONSTRAINT FK_4A84D8B9493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_period ADD CONSTRAINT FK_4A84D8B9EC8B7ADE FOREIGN KEY (period_id) REFERENCES period (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument ADD region_id INT DEFAULT NULL, ADD category_id INT DEFAULT NULL, ADD target_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB8828398260155 FOREIGN KEY (region_id) REFERENCES region (id)');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB8828312469DE2 FOREIGN KEY (category_id) REFERENCES category (id)');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB88283158E0B66 FOREIGN KEY (target_id) REFERENCES target (id)');
        $this->addSql('CREATE INDEX IDX_7BB8828398260155 ON monument (region_id)');
        $this->addSql('CREATE INDEX IDX_7BB8828312469DE2 ON monument (category_id)');
        $this->addSql('CREATE INDEX IDX_7BB88283158E0B66 ON monument (target_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE monument_period');
        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB8828398260155');
        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB8828312469DE2');
        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB88283158E0B66');
        $this->addSql('DROP INDEX IDX_7BB8828398260155 ON monument');
        $this->addSql('DROP INDEX IDX_7BB8828312469DE2 ON monument');
        $this->addSql('DROP INDEX IDX_7BB88283158E0B66 ON monument');
        $this->addSql('ALTER TABLE monument DROP region_id, DROP category_id, DROP target_id');
    }
}
