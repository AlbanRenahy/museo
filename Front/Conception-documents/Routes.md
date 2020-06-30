# Routes

## Front office

| URL | HTTP Method | Controller | Method | Title | Content | Comment |
|--|--|--|--|--|--|--|
| `/` | `GET` |  |  |  |  | - |
| `/inscription` |`POST` |  |--|--|--|--|
| `/connexion` |`POST` |--|--|--|--|--|
| `/map` |--|--|--|--|--|--|
| `/about` |--|--|--|--|--|
| `/contact` |--|--|--|--|--|--|
| `/list` |--|--|--|--|--|--|
| `/profil` |--|--|--|--|--|


## Back office

| URL | HTTP Method | Controller | Method | Title | Content | Access by Role |
|--|--|--|--|--|--|--|
| `/backoffice/settings` | `GET` | `AdminController` | `siteConfig` | Formulaire de configuration du site | SEO, OG:OG | - |
| `/backoffice/home` | `GET` | `AdminController` | `index` | Accueil du backoffice | Google Analystic, ect... | - |
| `/backoffice/users/admins` | `GET` | `AdminController` | `adminList` | Liste des Admins | -- | ROLE_SUPERADMIN |
| `/backoffice/users` | `GET` | `AdminController` | `listUser` | Tableau avec la liste de tous les users | -- | - |
| `/backoffice/users/edit/{id}` | `GET` | `AdminController` | `editUser` | Edition d'un user | -- | - |
| `/backoffice/users/new` | `POST` | `AdminController` | `newUser` | Création d'un user | -- | - |
| `/backoffice/user/delete/{id}` | `DELETE` | `AdminController` | `deleteUser` | Suppression d'un user | -- | - |
| `/backoffice/monument` | `GET` | `AdminController` | `monumentList` | Listes de tous les monuments en bdd | -- | - |
| `/backoffice/monument/edit/{id}` | `GET` | `AdminController` | `editMonument` | Edition d'un monument | -- | - |
| `/backoffice/monument/show/{id}` | `GET` | `AdminController` | `showMonument` | Voir un monument | -- | - |
| `/backoffice/monument/delete/{id}` | `DELETE` | `AdminController` | `deleteMonument` | Suppression d'un monument | -- | - |
| `/backoffice/monument/new` | `GET` | `AdminController` | `newMonument` | Ajout d'un monument | -- | - |

## API

| URL | HTTP Method | Controller | Method | Title | Content | Access by Role |
|--|--|--|--|--|--|--|
| `/api/monument/show/{id}` | `GET` | `ApiController` | `showMonument` | Retourne un monument en json | -- | -- |
| `/api/monument/all` | `GET` | `ApiController` | `allMonument` | Retourne tous les monuments en json | -- | -- |

<!-- > Pour un seul monument =>

{
    monument:
        id: '1'
        name: 'Musée du louvre'
        description: 'Lorem'
        Lat: 65416465445 (Important)
        Long: 546564565644 (Important)
        city: chantepie
        adress: avenue andré bonnin
        zipcode: 35135
        category_id: 1, 3
}

> Pour tous les monuments =>

{
    monuments:
        1:
            id: '1'
            name: 'Musée du louvre'
            description: 'Lorem'
            Lat: 65416465445 (<Important>)
            Long: 546564565644 (<Important>)
            city: chantepie
            adress: avenue andré bonnin
            zipcode: 35135
            category_id: 1, 3
        2:
            id: '1'
            name: 'Musée du louvre'
            description: 'Lorem'
            Lat: 65416465445 (Important)
            Long: 546564565644 (Important)
            city: chantepie
            adress: avenue andré bonnin
            zipcode: 35135
            category_id: 1, 3
} -->