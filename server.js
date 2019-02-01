
// Build the server functionality

// Server variables setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const exphbs = require('express-handlebars');
const db = require('./models')

// Hosting for static pages
app.use('/public', express.static('./public'));

// Our parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Utilize the routes supplied by burgers_controller.js
require('./controllers/burgers_controller.js')(app);

// Server listen
db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log(`Server listening on: PORT ${PORT}`);
    });
});
