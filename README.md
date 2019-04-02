# burger
This restaurant app is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. It is a CRUD application which uses most of the basic functions of persistent data storage:
* Create
* Read
* Update

## CLOUD PLATFORM
* HEROKU
    * [Open this app in HEROKU](https://lychee-sundae-13209.herokuapp.com/)

## APP LINKED TO MY PORTFOLIO
* [Visit my Profile Page](https://lucerosdj.github.io/Portfolio/)

## GOAL
This app's goal is to display existing data (burgers), allow you to input data (place a new order), and update data (devour your burger = true).
```
    This is achieved by using Node and MySQL to query and route data in our app, 
    and Handlebars to generate your HTML.
```

### TECHNOLOGIES 
* ORM (Object Relational Mapping)
* MySQL
* Express
* node.js
* Handlebars
* jQuery

### MODULES
* dotenv
* MySQL
* Express
* express-handlebars

### FUNCTIONALITY
1. `selectAll(...)`
    `→ method that will execute the necessary MySQL commands in controllers to RETRIEVE data from our database.`
    * MySQL server stores our database and table already populated with three entries.
    * Then, we retrieve the data to be displayed to the user.
    ![schemasMySQLcreatetable](https://user-images.githubusercontent.com/44692872/55384227-c628f280-54ef-11e9-9649-a0c7a257b7a8.png)
    ![selectAllORMmethod](https://user-images.githubusercontent.com/44692872/55384107-6af70000-54ef-11e9-8dec-864a043738f8.png)


2. `insertOne(...)`
    `→ method that will execute the necessary MySQL commands in controllers to STORE data from our database.`

3. `updateOne(...)`
    `→ method that will execute the necessary MySQL commands in controllers to UPDATE & STORE data from our database.`


