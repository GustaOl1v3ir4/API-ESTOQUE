class ApiOrganization {
    async FindById(req, res) {
        try {
            const { id } = req.params
            const organization = { id } // await service.findById(organizationId)

            res.status(200).send({organization})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
     async Create(req, res) {
        try {
            const { name, address, phone, email } = req.body
            const organization = { name, address, phone, email } // await service.findById(organizationId)

            res.status(200).send({organization})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Update(req, res) {
        try {
            const { id } = req.params
            const {  name, address, phone, email  } = req.body
            const organization = { id, name, address, phone, email} // await service.findById(organizationId)

            res.status(200).send({organization})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Delete(req, res) {
        try {
            const { id } = req.params
            const organization = { id } // await service.findById(organizationId)

            res.status(200).send({organization})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
}
module.exports = new ApiOrganization()