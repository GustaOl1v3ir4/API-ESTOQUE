const e = require('express')
const ServiceOrganization = require('../service/organization')

class ApiOrganization {
    async FindById(req, res) {
        try {
            const { id } = req.params
            const organization = await ServiceOrganization.FindById(id) // await service.findById(organizationId)

            res.status(200).send({organization})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
     async Create(req, res) {
        try {
            const { name, address, phone, email } = req.body
            const organization = await ServiceOrganization.Create (name, address, phone, email ) // await service.findById(organizationId)

            res.status(200).send({organization})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Update(req, res) {
        try {
            const { id } = req.params
            const {  name, address, phone, email  } = req.body
            const organization = await ServiceOrganization.Update(id, name, address, phone, email) // await service.findById(organizationId)

            res.status(200).send({organization})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Delete(req, res) {
        try {
            const { id } = req.params
            const organization = await ServiceOrganization.Delete(id)  // await service.findById(organizationId)

            res.status(200).send({organization})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
}
module.exports = new ApiOrganization()