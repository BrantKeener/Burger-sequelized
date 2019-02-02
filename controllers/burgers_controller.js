
// The controller acts as the router of our app.
// TODO build api for customer upload
// TODO make some sort of connection between burger and customer
// I'm thinking that you will be able to choose whether to display burgers eaten by particular people, or all


const db = require('../models');

// We will export all of this file

module.exports = (app) => {
// Get request for all burger-related data
    app.get('/', (req, res) => {
        Promise.all([db.Burger.findAll({include: [db.Customer]}), db.Customer.findAll({})])
        .then(data => {
            // if(data[0][0] !== undefined) {
            //     console.log(data[0][0].dataValues.Customer.dataValues.customerName)
            //     if(data[0][0].Burger !== undefined) {
            //         console.log(data[0][0].Burger);
            //     };
            // };
            res.render('index', {burger: data[0], customer: data[1]})
        });
    });

// Add a new burger functionality

    app.post('/api/burgers', (req, res) => {
        db.Burger.create(
            req.body
        ).then(result => {
            res.json(result);
        }).catch(err => {
            if(err) throw err;
        });
    });

// Add a new customer functionality
    app.post('/api/customers', (req, res) => {
        db.Customer.create(
            req.body
        ).then(result => {
            res.json(result);
        }).catch(err => {
            if(err) throw err;
        });
    });

// Update an already known burger
    app.put('/api/burgers/:id', (req, res) => {
        console.log(req.body);
        const id = req.params.id;
        const status = req.body.status;
        const customer = req.body.customer;
        db.Burger.update(
            {
                devoured: status,
                CustomerId: customer
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