const database = require("../database")
const Organizition = require("./organizition")


class Inventory {
    constructor() {
        this.model = database.db.define("inventories", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: database.db.Sequelize.STRING,
                allowNull: false,
            },
            organizationId: {
                type: database.db.Sequelize.INTEGER,
                references: {
                    model: Organizition,
                    key: "id"
                }
            }
        })

        this.model.belongsTo(Organizition,{
            foreignKey: 'organizationId'
        })
        Organizition.hasMany(this.model, {
            foreignKey: 'organizationId'
        })
    }
}

module.exports = new Inventory().model