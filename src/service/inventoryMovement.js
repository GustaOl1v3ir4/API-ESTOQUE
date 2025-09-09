
const modelInventoryMovement = require("../model/inventoryMovement")
const product = require("../model/product")

const movementeTypes = ['out', 'in']

class ServiceInventoryMovement {
    async FindById(inventoryId, id, transaction) {

        console.log("Buscando movimentação:", { inventoryId, id })
        return modelInventoryMovement.findOne({
        where: { inventoryId, id },
        transaction
    })

    
}
    
    async FindAll( inventoryId, transaction){
        return modelInventoryMovement.findAll({
            where: { inventoryId}, 
            include: {model: product},
            transaction 
     });
    }
    
    async Create(inventoryId, userId, type, amount, productId, transaction){
        if(!inventoryId){
            throw new Error("Favor informar o campo inventoryId")
        }else if(!userId){
            throw new Error("Favor informar o campo userId")
        }else if(!type || !movementeTypes.includes(type)){
            throw new Error("Favor informar o campo tipo de movimentação corretamente")
        }else if(!amount){
            throw new Error("Favor informar o campo qauntidade")
        }else if(!productId){
            throw new Error("Favor informar o campo produto")
        }

        return modelInventoryMovement.create(
            { inventoryId, userId, type, amount, productId},
            { transaction }
        )
    }

    async Update( inventoryId, id, type, amount, transaction){
        const oldInventoryMovement = await this.FindById( inventoryId, id)
        if(!oldInventoryMovement){
            throw new Error("Estoque não foi encotrado")
        }
        if(type && !movementeTypes.includes(type)){
            throw new Error("Informe o tipo de movimentação corretamente")
        }

        oldInventoryMovement.type = type || oldInventoryMovement.type
        oldInventoryMovement.amount = amount || oldInventoryMovement.amount

        return oldInventoryMovement.save ({ transaction })
    }

    async Delete( inventoryId,id,  transaction){
        const oldInventoryMovement = await this.FindById( inventoryId, id, transaction)
        if(!oldInventoryMovement) {
            throw new Error("Movimentação não encontrada para este estoque")
        }
        await oldInventoryMovement.destroy({transaction})

        console.log("Buscando movimentação:", { inventoryId, id })
    }
}

module.exports = new ServiceInventoryMovement()