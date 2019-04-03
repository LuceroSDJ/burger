# burger
This restaurant app is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. It is a CRUD application which uses most of the basic functions of persistent data storage:
* Create
* Read
* Update

## GOAL
This app's goal is to display existing data (burgers), allow you to input data (place a new order), and update data (devour your burger = true).
```
    This is achieved by using Node and MySQL to query and route data in our app, 
    and Handlebars to generate your HTML.
```
## CLOUD PLATFORM
* HEROKU
    * [Open this app in HEROKU](https://lychee-sundae-13209.herokuapp.com/)

## APP LINKED TO MY PORTFOLIO
* [Visit my Profile Page](https://lucerosdj.github.io/Portfolio/)

### TECHNOLOGIES 
* ORM (Object Relational Mapping)
* MySQL
* Express
* node.js
* Handlebars
* BOOTSTRAP
* jQuery

### MODULES
* dotenv
* MySQL
* Express
* express-handlebars

### FUNCTIONALITY
1. `selectAll(...)`
    `→ method that will execute the necessary MySQL commands in controllers to RETRIEVE data from our database.`
    * MySQL server stores `burger_db` database and `burgers` table with the following three fields: 
        * `id:` auto increment integer as primary key.
        * `burger_name:` a string.
        * `devoured:`a boolean.
    * This table was initially populated with three entries.
    * Then, we `GET` this initial data and display it to the user on the left side of the page (waiting area).
    * Each burger added to the waiting area, has a `Devour it!` button next to it.

    ![schemasMySQLcreatetable](https://user-images.githubusercontent.com/44692872/55384227-c628f280-54ef-11e9-9649-a0c7a257b7a8.png)
    ![selectAllORMmethod](https://user-images.githubusercontent.com/44692872/55384107-6af70000-54ef-11e9-8dec-864a043738f8.png)

2. `insertOne(...)`
    `→ method that will execute the necessary MySQL commands in controllers to STORE data from our database.`
    * This friendly restaurant app lets users input the name of burgers they would like to eat.
    * Then, we grab users' input value and `POST` it in our database. 
    * Once the page is refreshed, the new burger data & `Devout it!` button are displayed on the left side of the page.
    ![Screen Shot 2019-04-02 at 6 39 12 PM](https://user-images.githubusercontent.com/44692872/55443037-c1f3e800-5576-11e9-8440-66467a82d00b.png)
    ![newDisplayedZoom](https://user-images.githubusercontent.com/44692872/55443104-10a18200-5577-11e9-9bb9-dfe573837d27.png)

3. `updateOne(...)`
    `→ method that will execute the necessary MySQL commands in controllers to UPDATE & STORE data from our database.`
    * When users click on the `Devour it!` button, our app updates the `devoured: BOOLEAN` field in our `burgers` table.
    * This means: `PUT` → `devoured = true`
    * As a result, the burger is moved to the right side of the page.
    ![updateData](https://user-images.githubusercontent.com/44692872/55443794-90c8e700-5579-11e9-8c9b-deabc0e5421a.png)



