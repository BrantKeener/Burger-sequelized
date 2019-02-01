
// The controller acts as the router of our app.

const db = require('../models');

// We will export all of this file

module.exports = (app) => {
// Get request for all burger-related data
    app.get('/', (req, res) => {
        db.Burger.findAll({

            }).then(burgData => {
                res.render('index', {burger: burgData});
            });
    });

// Add a new burger functionality

    app.post('/api/burgers', (req, res) => {
        console.log(req.body)
        db.Burger.create(
            req.body
            ).then(result => {
                res.json(result);
            }).catch(err => {
                if(err) throw err;
            });
    });

// Update an already known burger
    app.put('/api/burgers/:id', (req, res) => {
        const id = req.params.id;
        const status = req.body.status;
        db.Burger.update(
            {
                devoured: status
            },
            {
                where: 
                    {id: id}    
            }
            ).then(result => {
                res.json(result);
            }).catch(err => {
                if(err) throw err;
            });
    });

};