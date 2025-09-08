const user = require("../model/user")
const ServiceInventoryMovement = require("../service/inventoryMovement")

class ApiInventoryMovement {
    async FindById(req, res) {
        try {
            const { inventoryId, id } = req.params
            const inventoryMovement = await ServiceInventoryMovement.FindById( inventoryId, id )

            res.status(200).send({inventoryMovement})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async FindByAll(req, res) {
        try {
            const { inventoryId } = req.params
            const inventoryMovements = await ServiceInventoryMovement.FindByAll( inventoryId)

            res.status(200).send({inventoryMovements})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
     async Create(req, res) {
        try {
            const userId = 10 
            const { inventoryId } = req.params
            const { type, amount, productId } = req.body
            const inventoryMovement = await ServiceInventoryMovement.Create( inventoryId, userId, type, amount, productId )

            res.status(200).send({inventoryMovement})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Update(req, res) {
        try {
            const { id, inventoryId } = req.params
            const { type, amount  } = req.body
            const inventoryMovement = await ServiceInventoryMovement.Update( inventoryId, id, type, amount, )

            res.status(200).send({inventoryMovement})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Delete(req, res) {
        try {
            const { id, inventoryId } = req.params
            const inventoryMovement = await ServiceInventoryMovement.Delete( id, inventoryId)

            res.status(200).send({inventoryMovement})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
}
module.exports = new ApiInventoryMovement()