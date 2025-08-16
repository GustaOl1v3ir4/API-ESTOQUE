const database = require("../database")
const Organizition = require("./organizition")


class User {
    constructor() {
        this.model = database.db.define("users", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: database.db.Sequelize.STRING,
                allowNull: false 
            },
            role: {
                type:database.db.Sequelize.STRING,
                allowNull: false,
            },
            OrganizationId: {
                type: database.db.Sequelize.INTEGER, 
                references: {
                    model: Organizition,
                    key: "id",
                }
            },
        })

        this.model.belongsTo(Organizition, {
            foreignKey: 'OrganizationId'
        })
        Organizition.hasMany(this.model, {
            foreignKey: 'OrganizationId'
        })
    }
}

module.exports = new User().model