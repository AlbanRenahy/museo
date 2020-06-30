# Monument

- id (INT)
- name (VARCHAR)
- description (TEXT)
- adress (VARCHAR)
- city (VARCHAR)
- createdAt (TIMESTAMP)
- updatedAt (TIMESTAMP)
- online (BOOL)
- status (BOOL)
- lat (dec)
- long (dec)
<!-- Relations -->
- category [FK to => Category]
<!-- - category_id (Relation : OneToMany) -->

# Category

- id (INT)
- name (VARCHAR)
- slug (VARCHAR)
- description (TEXT)

# Region 

- id (INT)
- name (VARCHAR)
- zipcode (INT * max(5))
- slug (VARCHAR)

# Period

- id (INT)
- name (VARCHAR)
- slug (VARCHAR)

# Thematic

- id (INT)
- name (VARCHAR)
- slug (VARCHAR)

# Label

- id (INT)
- name (VARCHAR)
- slug (VARCHAR)


# TargetAudience

- id (INT)
- name (VARCHAR)

# User

- id (INT)
- username (VARCHAR)
- firstname (VARCHAR)
- lastname (VARCHAR)
- email (VARCHAR)
- roles_id (JSON * Relation to Role)
- isActive (BOOL)

# Role 

- id (INT)
- role (VARCHAR)
