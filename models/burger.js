
// The burger model for sequelize to work with

module.exports = (sequelize, DataTypes) => {
    let Burger = sequelize.define("Burger", {
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    });
    
    // Associate burgers with Customers in a one to one relationship
    // Burger.associate = (models) => {
    //     models.Burger.hasOne(models.Customer, {
    //         foreignKey: {
    //             defaultValue: 0
    //         }
    //     });
    // };
    return Burger;
};
