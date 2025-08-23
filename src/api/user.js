const serviceUser = require("../service/user")

class ApiUser {
    async FindById(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const user = await serviceUser.FindById(organizationId, id) // await service.findById(userId)

            res.status(200).send({user})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async FindByAll(req, res) {
        try {
            const organizationId = 1
            const users = await serviceUser.FindAll(organizationId) // await service.findById(userId)

            res.status(200).send({users})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
     async Create(req, res) {
        try {
            const organizationId = 1
            const { name, email, password, role } = req.body
            const user = await serviceUser.Create(organizationId, name, email, password, role) // await service.findById(userId)

            res.status(200).send({user: user.toJSON()})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const { name, email, password, role } = req.body
            const user = await serviceUser.Update(organizationId, id, name, email, password, role) // await service.findById(userId)

            res.status(200).send({user})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const user = await serviceUser.Delete(organizationId, id) // await service.findById(userId)

            res.status(200).send({user})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
}
module.exports = new ApiUser()