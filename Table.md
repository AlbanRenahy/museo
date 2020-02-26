## Partie Monument

`Table principale`

Table : Monument (id, name, city, adress, createdAt, updatedAt, description, thématiques, likes(int), dislikes(int), label_id(`ManyToMany`), category_id(`OneToMany`), thematic_id(`ManyToMany`), region_id(`OneToMany`), user_id(`OneToMany`))

Table : Category (id, name, description) `Ex : Musée, Monuments, Insolites, Autres`

Table : Public visé (id, name, description) `Ex : Adulte, Famille, Enfance`

Table : Region (id, name) `Ex : Bretagne, ect...`

Table : statut: `Ex: ouvert, fermé`

Table : Label (id, name) `Ex: Sites archéologiques, Châteaux, Patrimoine religieux, Ouvrage militaire, Demeures d’illustres, Monuments commémoratifs, Parcs et jardins, Autres`

Table : Thematic (id, name) `Ex: Archéologie, Art, Beaux-Arts, Arts décoratifs, Histoire, Sciences, Histoire naturelle, Techniques, Ethnologie, Autres`

Table : Periode (id, name) `Ex : Préhistoire, Antiquité, Moyen Age, Renaissance, XVII, XXIII, XIX, XX`

### UTILISATEUR
Table : User(id, name, email, firstname, lastname, avatar, roles_id)
Table : Roles(id, name) `(Uniquement pour symfony)`

### UI
L'utilisateur clique sur un endroit de la map, qui affiche une modale, pour remplir un nouveau lieu.


### IDEES DE MODERATION:
Au bout de x dislikes, fiche supprimée
Validation manuelle des entrées







