<!-- La table Monument => Table Principale -->
MONUMENT: id, name, city, adress, createdAt, updatedAt, description, thématiques, likes, dislikes, label_id, category_id, thematic_id,  region_id, user_id
CATEGORY: id, name, description, createdAt, updatedAt 
TARGET AUDIENCE: id, name, description, createdAt, updatedAt 
REGION: id, name, createdAt, updatedAt 
<!--LABEL: id, name, createdAt, updatedAt-->  
THEMATIC: id, name, createdAt, updatedAt 
PERIODE: id, name, createdAt, updatedAt 
USERS: id, username, firstname, lastname, email, createdAt, updatedAt 
ROLE: id, name, createdAt, updatedAt 

# Monument

- id (INT)
- name (VARCHAR)
- description (TEXT)
- adress (VARCHAR)
- city (VARCHAR)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
- online (BOOL)
- available (BOOL)
  
       ### Relations
        - category_id (Relation: OneToMany)
        - region_id (Relation: OneToMany)
        - period_id (Relation: OneToMany)
        - thematic_id (Relation: ManyToMany)
            <!-- label_id (Relation: ManyToMany)-->
        - targetaudience_id (Relation: OneToMany)
        - user_id (Relation: OneToMany)

# Category

- id (INT)
- name (VARCHAR)
- slug (VARCHAR)
- description (TEXT)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)

# Region 

- id (INT)
- name (VARCHAR)
- zipcode (INT * max(5))
- slug (VARCHAR)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)

# Period

- id (INT)
- name (VARCHAR)
- slug (VARCHAR)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)

# Thematic

- id (INT)
- name (VARCHAR)
- slug (VARCHAR)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)

<!--# Label

- id (INT)
- name (VARCHAR)
- slug (VARCHAR)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
-->
# TargetAudience

- id (INT)
- name (VARCHAR)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)

# User

- id (INT)
- username (VARCHAR)
- firstname (VARCHAR)
- lastname (VARCHAR)
- email (VARCHAR)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
- roles_id (JSON * Relation to Role)
- isActive (BOOL)

# Role 


- id (INT)
- name (VARCHAR)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)



# MCD 

USERS: id, username, firstname, lastname, email, createdAt, updatedAt
HAVE, 1N ROLE, 01 USERS
ROLE: id, name, createdAt, updatedAt


PERIODE: id, name, createdAt, updatedAt

TARGET AUDIENCE: id, name, description, createdAt, updatedAt

BELONGSTO, 01 MONUMENT, 01 REGION
REGION: id, name, createdAt, updatedAt

CATEGORY: id, name, description, createdAt, updatedAt

MONUMENT: id, name, city, adress, createdAt, updatedAt, description, thématiques, likes, dislikes, label_id, category_id, thematic_id,  region_id, user_id
BELONGS, 01 CATEGORY,  01 MONUMENT

CONTAINS, 01 THEMATIC, 01 MONUMENT
THEMATIC: id, name, createdAt, updatedAt


