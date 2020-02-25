# User stories v1

Fiche récap : https://github.com/O-clock-Alumni/fiches-recap/blob/master/gestion-projet/user-stories.md#sp%C3%A9cifications

## Sur toute l'application 

| En tant que | Je veux | Afin de (si besoin/nécessaire) |
|--|--|--|
| utilisateur | pouvoir | Me deconnecter |
| utilisateur | pouvoir | Se connecter |
/!\ | utilisateur | pouvoir | Poster des images de Michel Sardou | /!\

## Home

| En tant que | Je veux | Afin de (si besoin/nécessaire) |
|--|--|--|
| visiteur | pouvoir acceder a la page d'accueil | de pouvoir m'inscrire |
| visiteur | pouvoir acceder a la page d'accueil | de pouvoir me connecter |
| visiteur | pouvoir acceder a la page d'accueil | de pouvoir me connecter avec Google (OAuth) |
| visiteur | pouvoir acceder a la page d'accueil | de pouvoir acceder à l'application en tant que visiteur |
| utilisateur | pouvoir acceder a la page d'accueil | de pouvoir me connecter |
| utilisateur | pouvoir acceder a la page d'accueil | de pouvoir réinitialiser son mdp (mot de passe perdu) |
| utilisateur | pouvoir acceder a la page d'accueil | de pouvoir me connecter avec Google (OAuth) |
| admin | pouvoir acceder a la page d'accueil | de pouvoir me connecter et acceder à l'application |
| admin | pouvoir acceder a la page d'accueil | de pouvoir me connecter et acceder au backoffice |


## La Carte 


| En tant que | Je veux | Afin de (si besoin/nécessaire) |
|--|--|--|
| visiteur | pouvoir acceder à la carte | de pouvoir voir tous les 'monuments' mis sur la carte |
| utilisateur | pouvoir acceder à la carte | de pouvoir choisir parmi les filtres une "`Category`" de "`Monument`"|
| utilisateur | pouvoir acceder à la carte | de pouvoir rechercher un monument grace à son nom | 
| utilisateur | pouvoir créer une fiche | de pouvoir renseigner les données sur un lieu |


## MonumentPage ('page/card' d'un monument)


| En tant que | Je veux | Afin de (si besoin/nécessaire) |
|--|--|--|
| visiteur | pouvoir acceder à un monument | de pouvoir `voir` les informations (limité) du monument |
| utilisateur | pouvoir acceder à un monument | de pouvoir `voir` toutes les informations du monument et voir les commentaires |
| utilisateur | pouvoir acceder à un monument | de pouvoir mettre un likes ou un dislikes sur le monument (Un seul par utilisateur) |


## UserProfile


| En tant que | Je veux | Afin de (si besoin/nécessaire) |
|--|--|--|
| utilisateur | pouvoir acceder à son profil | de pouvoir `voir` toutes ses informations personnelles (nom, email, ect ect...) |
| utilisateur | pouvoir acceder à son profil | de pouvoir `modifier` toutes ses informations personnelles (nom, email, ect ect...) |
| utilisateur | pouvoir acceder à son profil | de pouvoir `ajouter` des informations personnelles manquantes et non obligatoire (photo, age, ect, ect) |
| utilisateur | pouvoir acceder à son profil | de pouvoir `voir` tous les monuments rentrer personnellement sur l'application |
| admin | pouvoir acceder au profil d'un utilisateur choisi | de pouvoir `voir` le bannir (avec l'ip) |


## Backoffice


| En tant que | Je veux | Afin de (si besoin/nécessaire) |
|--|--|--|
| admin | pouvoir acceder au backoffice | de pouvoir `voir` les données d'analyse (Google tracking, Nombre d'inscrits, Temps de réaction du serveur, ect ect) |
| admin | pouvoir acceder au backoffice | de pouvoir `voir` les 'monuments' soumis par les utilisateurs |
| admin | pouvoir acceder au backoffice | de pouvoir `accepter`/`refuser` les 'monuments' soumis par les utilisateurs |
| admin | pouvoir acceder au backoffice | de pouvoir `supprimer` les 'monuments' en bdd si le monument à trop de dislike |
| admin | pouvoir acceder au backoffice | de pouvoir `editer` les 'monuments' en bdd |