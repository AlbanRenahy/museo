<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200319101703 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB882833DA5256D');
        $this->addSql('DROP TABLE media_object');
        $this->addSql('DROP TABLE monument_period');
        $this->addSql('DROP INDEX IDX_7BB882833DA5256D ON monument');
        $this->addSql('ALTER TABLE monument ADD period_id INT DEFAULT NULL, ADD image_name VARCHAR(255) NOT NULL, ADD image_size INT NOT NULL, DROP image_id, DROP category_id, DROP image');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB88283EC8B7ADE FOREIGN KEY (period_id) REFERENCES period (id)');
        $this->addSql('CREATE INDEX IDX_7BB88283EC8B7ADE ON monument (period_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE media_object (id INT AUTO_INCREMENT NOT NULL, file_path VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE monument_period (monument_id INT NOT NULL, period_id INT NOT NULL, INDEX IDX_4A84D8B9493DA1E5 (monument_id), INDEX IDX_4A84D8B9EC8B7ADE (period_id), PRIMARY KEY(monument_id, period_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE monument_period ADD CONSTRAINT FK_4A84D8B9493DA1E5 FOREIGN KEY (monument_id) REFERENCES monument (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument_period ADD CONSTRAINT FK_4A84D8B9EC8B7ADE FOREIGN KEY (period_id) REFERENCES period (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE monument DROP FOREIGN KEY FK_7BB88283EC8B7ADE');
        $this->addSql('DROP INDEX IDX_7BB88283EC8B7ADE ON monument');
        $this->addSql('ALTER TABLE monument ADD category_id INT DEFAULT NULL, ADD image VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, DROP image_name, DROP image_size, CHANGE period_id image_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE monument ADD CONSTRAINT FK_7BB882833DA5256D FOREIGN KEY (image_id) REFERENCES media_object (id)');
        $this->addSql('CREATE INDEX IDX_7BB882833DA5256D ON monument (image_id)');
    }
}
