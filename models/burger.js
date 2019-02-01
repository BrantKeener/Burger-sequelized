
// The burger model for sequelize to work with

module.exports = (sequelize, DataTypes) => {
    let Burger = sequelize.define("Burger", {
        burgerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    });
    return Burger;
};
