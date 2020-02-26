### Sprint 0

Cahier des charges :

## Présentation du projet (dans les grandes lignes)
Pour les amateurs d'art et patrimoine, quand on est en voyage ou déplacement, on a pas toujours connaissance des multiples lieux fascinants à explorer autour, tout particulièrement en campagne. Museo est une application cartographique qui permet aux utilisateurs de renseigner leurs monuments et musées favoris, et ainsi inspirer à la communauté des visites incontournables ou insolites de notre patrimoine.
Nous souhaitons créer un site bilingue, car future clientèle potentiellement internationale (plus de visiteurs étrangers qui visitent les sites français que d'habitants français chaque année...).


## Définition des objectifs
 - Créer une interface cartographique fonctionnelle
 - Pouvoir se géolocaliser (géolocalisation par défaut)
 - Créer un profil d'utilisateur
 - Pouvoir se connecter / se déconnecter
 - Pouvoir renseigner une fiche sur un lieu
 - Pouvoir voter et voir le compteur de votes
 - Page de contact
 - Page à propos
 - Accéder au profil et pouvoir le mettre à jour
 - Accéder aux fiches déjà créées
 - Site bilingue
 - Faire persister la connexion de l'utilisateur, voir même sur la journée entière
 - Deux possibilités de création: soit avec un bouton d'ajout de fiche, soit avec click-droit sur la map (V2)
 - Chaque fiche dispose d'une partie de commentaires (V2)


## Définition du MVP (Minimum Viable Product)
 - Créer une interface cartographique fonctionnelle
 - Pouvoir se géolocaliser (géolocalisation par défaut)
 - Créer un profil d'utilisateur
 - Pouvoir se connecter / se déconnecter
 - Pouvoir renseigner une fiche sur un lieu
 - Pouvoir voter et voir le compteur de votes
 - Page de contact
 - Page à propos
 - Accéder au profil et pouvoir le mettre à jour
 - Accéder aux fiches déjà créées
 - Créer une fiche en cliquant sur le bouton d'ajout de fiche
 - Site bilingue

## Décrire les fonctionnalités (spécifications fonctionnelles)
 - Créer un profil d'utilisateur
 - Pouvoir se connecter / se déconnecter
 - Pouvoir renseigner une fiche sur un lieu
 - Pouvoir voter et voir le compteur de votes
 - Page de contact
 - Page à propos
 - Accéder au profil et pouvoir le mettre à jour
 - Accéder aux fiches déjà créées
 - Deux possibilités de création: soit avec un bouton add-fiche
 - Site bilingue
 - L'utilisateur ne peut voter qu'une seule fois pour chaque building
 - En switchant sur les monuments, on a directement accès aux punaises qui sont sur notre point de vue.


## Décrire les rôles de chacun
- Cécile: GitMaster front
- Coralie: Lead Dev/Front
- Julien: Lead Dev/Back, GitMaster back
- Anthony: Scrum master
- Alban: Product owner

## Lister technos utilisées (spécifications techniques)
- React
- Semantic UI React / Bulma / Materialize / Bootstrap (à choisir pour responsive)
- OpenStreet map API / Gouv map API / Leaflet
- Symfo
  
## Décrire la cible (public visé)
Le site vise les amateurs d'art et patrimoine et en général les voyageurs qui souhaitent découvrir ce qu'il y a autour d'eux.
Suivant les lieux, l'âge visé est différent. Des visites plus au goût des adultes comme des idées de musées destinés aux enfants / adolescents.

## Décrire les potentielles évolutions
  - ajout de commentaires
  - ajout de filtres
  - ajout de couleur de theme
  - carrousel d'images sur les fiches
  - proposition random de lieu à visiter
  - pouvoir gérer les modifications de fiche par un autre utilisateur que le "créateur"
  - versionning des fiches

## Arborescence de l'appli (montrer les workflows)
- https://whimsical.com/He5Qu3uisBtPGnuUpV25zj

## Lister les users stories
-  ( voir user_stories.md )

## Lister les routes
  - ( voir routes.md )

## Wireframes du projet

- https://whimsical.com/Fk8hNtnxnhQZMZVKfgACQ

## Documents liés à la BDD

Dico de données
MCD (model conceptuel de données)
Eventuellement un MLD (model logique de données)