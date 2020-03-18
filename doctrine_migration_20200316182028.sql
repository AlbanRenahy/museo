-- Doctrine Migration File Generated on 2020-03-16 18:20:28

-- Version 20200316182011
ALTER TABLE monument ADD is_active TINYINT(1) DEFAULT NULL, CHANGE region_id region_id INT NOT NULL;
INSERT INTO migration_versions (version, executed_at) VALUES ('20200316182011', CURRENT_TIMESTAMP);
