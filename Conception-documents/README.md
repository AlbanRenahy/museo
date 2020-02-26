# Projet Museo 

![](museo_graphic/logo_museo_couleur.png)

L'application cartographique participative qui vous donne accès aux musées et monuments à visiter autour de vous.

Prendre le temps de découvrir notre patrimoine, contempler toiles, sculptures et photographies dans un environnement calme et accueillant nous aide à oublier le rythme frénétique du quotidien, en plus de créer de belles émotions à la contemplation.

Pour les amateurs d'art et patrimoine, quand on est en voyage ou déplacement, on a pas toujours connaissance des multiples lieux fascinants à explorer autour, tout particulièrement en campagne.
De ce constat, je me dis: pourquoi pas créer une application cartographique qui permettrait aux utilisateurs de renseigner leurs monuments ou musées favoris, et ainsi inspirer à la communauté des visites incontournables ou insolites de notre patrimoine.

Cette application tournée vers le partage d'infos sera majoritairement alimentée par ses utilisateurs, qui pourront renseigner leurs lieux d'exposition à la communauté via une carte interactive.

Ainsi, les utilisateurs connectés pourront créer des étiquettes pour renseigner des informations sur leurs monuments et musées favoris. Tout visiteur du site pourra ensuite consulter les lieux sur la carte, avec une option de géolocalisation. Quelques explications de l’idée ci-dessous ▼

Description
Idée générale:

L’utilisateur connecté pourrait pointer un endroit sur la carte et créer une étiquette sur ses lieux de patrimoine favoris, puis y renseigner des données, telles que:

Type du lieu à visiter (monument ou musée)
Son nom
Son adresse
Liste des thématiques principales (histoire, peinture, architecture, art moderne, archéologie, science etc...)
Label (unesco, monument historique, musée de France...)
Artistes / Personnages phares
Œuvres principales
système de vote du lieu + commentaires
Les autres utilisateurs pourront avoir accès au lieu sur la carte via une punaise, son étiquette et interagir avec elle par des boutons d'appréciation, commentaires ou compléter les données.

En temps que non connecté, je pourrai voir les lieux sur la carte, le contenu des étiquettes mais sans pouvoir en ajouter, ni modifier, ni interagir.

J’imagine une possibilité de recherche des lieux par thématiques, ou bien filtrer par les 2 possibilités du site: musées ou monuments.
Via un bouton de thématiques, on aurait accès à une liste de tags pour affiner la recherche. Les boutons 'musées' et 'monuments' nous montreraient les punaises correspondantes et présentes sur la carte de l'utilisateur.
Pour le design, on peut se faire plaisir, pour mixer un design épuré et des références à l'art en général.

Enfin, pour les priorités du MVC, mon hypothèse de 1 à 3:

(1) Page d'accueil, avec le form de connexion/d'inscription/oubli de mot de passe (single page app')
(1) Requêtes axios à l'API
(1) Page de la carte avec le système de création / consultation d'étiquettes.
(1) Version mobile à faire évoluer en même temps que la version desktop

(2) Système de commentaires + notation
(2) Différents types de punaises pour l'expérience utilisateur
(2) Ajout de photos
(2) Navigation dynamique ( auto-complétion des adresses, géolocalisation...)
(2) Système de modération de contenu

(La partie cerise sur le gâteau, si on a le temps)
(3) Carrousel d'images sur les étiquettes
(3) tri des résultats suivant une zone géographique établie ( <150 km par exemple )
(3) Partage d'une étiquette sur différents réseaux sociaux

(4) Une bonne bière si on a tout fini ! ( et une quand même si on a pas fini ! )

Opportunités
Je pense que c’est une bonne opportunité pour :

Pratiquer les relations avec la BDD
Gérer les comptes d’utilisateurs
Implémenter un site cartographique fonctionnel et utiliser une API comme google Maps ou Open Street Map
Enregistrer les modifications de la carte avec le back-end, qui à mon avis sera un gros challenge, mais super formateur !
Gérer un système de commentaires.
Mettre au point un système de modération.
Développer une version responsive du site.
Poursuivre le projet post formation, qui sait :P
Quelles seront/pourraient être les technologies utilisées ?
Idéalement, un site codé avec React et une API en Symfony, avec sous le capot:

mySQL
Doctrine
axios pour les appels à l'API
SemanticUI
Une librairie js de gestion de carte (je pense à leaflet)
l'API de GoogleMaps ou open street map pour rechercher les adresses.
Avez-vous une idée de l'équipe qui conviendrait à ce projet ?
Je verrais bien 2 voir 3 React et 2 Symfo. Il y a autant à s'amuser au niveau back qu'au niveau front à mon avis.
