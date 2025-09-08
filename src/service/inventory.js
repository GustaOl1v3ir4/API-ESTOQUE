const { where } = require("sequelize")
const modelInventory = require("../model/inventory")

class ServiceInventory {
    async FindById(organizationId, id,  transaction){
        return modelInventory.findOne(
            {where: {organizationId, id}},
            { transaction }
        )
    }
    
    async FindByAll(organizationId, transaction){
        return modelInventory.findAll(
            {where: {organizationId}},
            {transaction }
        )
    }
    
    async Create(organizationId, name, transaction){
        if(!organizationId){
            throw new Error("Favor informar o campo orgnaizationId")
        }else if(!name){
            throw new Error("Favor inserir o nome")
        }

        return modelInventory.create(
            {organizationId, name},
            { transaction }
        )
    }

    async Update(organizationId, id,  name, transaction){
        const oldInventory = await this.FindById(organizationId, id)
        if(!oldInventory){
            throw new Error("Estoque não foi encotrado")
        }
        oldInventory.name = name || oldInventory

        return oldInventory.save ({ transaction })
    }

    async Delete(organizationId, id,  transaction){
        const oldInventory = await this.FindById(organizationId, id, transaction)
        if(!oldInventory) {
            throw new Error("Estoque não foi encontrado")
        }
        await oldInventory.destroy({transaction})
    }
}

module.exports = new ServiceInventory()