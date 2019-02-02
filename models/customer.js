
// A Customer model

module.exports = (sequelize, DataTypes) => {
    let Customer = sequelize.define("Customer", {
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

// Build a "hasMany" association with Burger so that a single customer can eat many different burgers
    Customer.associate = (models) => {
        models.Customer.hasMany(models.Burger, {
            onDelete: "cascade"
        });
    };
    return Customer;
};