# PizzaMama

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.



## Contexte du projet

La chaîne de restaurants Pizzeria Della Mamma souhaite automatiser la prise de commande en restaurant. Pour cela, chaque tablée se verra attribuer une tablette au moment de s’installer. Les clients pourront alors créer leur commande et l’envoyer en cuisine directement. Il est important que les clients aient la possibilité de customiser leurs pizzas.

Le projet ne nécessite pas de responsive car il est destiné à une tablette dont les dimensions sont connues.  

La pizzeria fournira les maquettes ainsi que les données de produits.

## Modalités pédagogiques

Les équipes (de 3 personnes) sont établit à l'avance par la formatrice.
Les apprenant.e.s disposent d'une semaine pour terminer le projet.  
Le rendu se fera vendredi 24 février sur github ou gitlab. 

## Critères de performance
  
Le projet doit respecter les maquettes et présenter toutes les fonctionnalités.

## Modalités d'évaluation

Il est important que ce soit une personne différente du groupe qui s’occupe de ces features. Celles-ci devront être décrite dans le readme par la personne l'ayant réalisée :

- La customisation d’un produit

- La sélection et modification du numéro de table

- L’affichage des produits classés par type de produits

Pour les groupes de 4 personnes, la quatrième personne devra s'occuper du panier

Le readme doit présenter le projet et les étapes de son installation

## Livrables

Un dépôt github par groupe


### L’affichage des produits classés par type de produits

- Cette tâche a été réalisée par Erdal.

 - La page produit se trouve dans le dossier /pages

 - Les composants enfant concernant cette page sont regroupés dans /composants/products.

- il y a 3 composants enfants:

	 -- product-card

	-- products-category

	-- tags

---------------------------------------------------------------------------------

### L’affichage des produits classés par type de produits

- La customisation d’un produit a été réalisé par Morgane: 

	-- page customisation de produit + service panier

	-- création du service produit : création d'une fonction qui récupère un produit du mock

	-- création du service panier : création d'une fonction pour ajouter un article ainsi qu'une fonction pour le retirer

	-- création de 3 composants : customize-parent / base-product / product-extra


### L’affichage des produits classés par type de produits

- La sélection et modification du numéro de table a été réalisé par Fahed.
	-- page d'accueil + header + liaison entre les deux
