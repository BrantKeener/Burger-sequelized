# Burger-Sequelized
The burger app re-imagined with Sequelize

**Burger-Sequelized** is an easy interface allowing users to input a burger they would like to eat, and then click on "Devour it" to virtually eat the burger and move it to the eaten field. All of this occurs as updates to a persistent database.

## Motivation

**Burger-Sequelized** utlizied Node.js, Sequelize, and express as it's server-side technologies. Handlebars handled the html production, and CSS3 styled the page.

## Build Status

Complete

## Code Style

Standard

## Tech/framework Used

Built utilizing Node.js, express, Sequelize, and handlebars.

## Features

Burger-Sequelized features a database that allows a user to enter a customer name, or select one from a dropdown menu. They can then add a burger, and eventually eat it. The customer name can be changed everytime, and the user will be able to see who ordered, and who ate the burger.

## Installation

Perform either a clone or a fork by visiting [Burger-Sequelized](https://github.com/BrantKeener/Burger-sequelized).

The user then needs to install the appropriate npm files, which are included in the package.json as dependencies. Perform an npm install, and you are ready! You may also perform the following installs manually if you choose:
1. express
2. express-handlebars
3. mysql2
4. sequelize

## How to Use

The simplest way to use this app is just to visit the heroku-hosted [Burger-Sequelized](https://damp-escarpment-30359.herokuapp.com/), and enjoy. Once you navigate to the webpage you may interact in two different ways:
1. Add a Customer - Add your name.
2. Select a Customer - Select the appropriate customer name.
3. Add a burger - Add your favorite burger to the uneaten burger list. The name you had selected when you added the burger will be displayed.
4. Devour it - Devour one of the burgers in your uneaten list. The name you had selected when you devoured the burger will be displayed.

## Credits

Written and maintained by Brant Keener.
