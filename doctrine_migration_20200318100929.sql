-- Doctrine Migration File Generated on 2020-03-18 10:09:29

-- Version 20200316182011
ALTER TABLE monument ADD is_active TINYINT(1) DEFAULT NULL, CHANGE region_id region_id INT NOT NULL;
INSERT INTO migration_versions (version, executed_at) VALUES ('20200316182011', CURRENT_TIMESTAMP);

-- Version 20200317114256
ALTER TABLE user ADD activation_token VARCHAR(50) DEFAULT NULL;
INSERT INTO migration_versions (version, executed_at) VALUES ('20200317114256', CURRENT_TIMESTAMP);

-- Version 20200318091302
ALTER TABLE monument DROP FOREIGN KEY FK_7BB882833DA5256D;
DROP TABLE media_object;
DROP INDEX IDX_7BB882833DA5256D ON monument;
ALTER TABLE monument DROP image_id;
INSERT INTO migration_versions (version, executed_at) VALUES ('20200318091302', CURRENT_TIMESTAMP);

-- Version 20200318093858
ALTER TABLE monument ADD filename VARCHAR(255) NOT NULL;
INSERT INTO migration_versions (version, executed_at) VALUES ('20200318093858', CURRENT_TIMESTAMP);

-- Version 20200318100914
ALTER TABLE monument DROP FOREIGN KEY FK_7BB882833DA5256D;
DROP TABLE media_object;
DROP INDEX IDX_7BB882833DA5256D ON monument;
ALTER TABLE monument ADD image_name VARCHAR(255) NOT NULL, ADD image_size INT NOT NULL, DROP image_id, DROP image, CHANGE region_id region_id INT NOT NULL;
INSERT INTO migration_versions (version, executed_at) VALUES ('20200318100914', CURRENT_TIMESTAMP);
