# Doc Museo Back

# API Utilisateurs : 

> Pour recuperer tous les utilisateurs : 

```php
/api/users (METHOD = GET)
```

> Pour ajouter un utilisateur : 

```php
/api/users/add (METHOD = POST)

Fields : 
- id
- email
- password
- firstname (can be null)
- lastname (can be null)
- picture (can be null, link)
- pseudo (can be null)
```

> Pour recuperer un utilisateur : 

```php
/api/users/show/{id} (METHOD = GET)
```

> Pour editer un utilisateur : 

```php
/api/users/edit/{id} (METHOD = PUT)
```

> Pour supprimer un utilisateur : 

```php
/api/users/delete/{id} (METHOD = DELETE)
```



