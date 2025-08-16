class ApiProduct {
    async FindById(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const product = { id } // await service.findById(productId)

            res.status(200).send({product})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async FindByAll(req, res) {
        try {
            const products = [{organizationId}] // await service.findById(productId)

            res.status(200).send({products})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
     async Create(req, res) {
        try {
            const organizationId = 1
            const { name, description } = req.body
            const product = { name, description } // await service.findById(productId)

            res.status(200).send({product})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Update(req, res) {
        try {
            const organizationId = 1
            const { id, name, description } = req.params
            const product = {} // await service.findById(productId)

            res.status(200).send({product})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
    async Delete(req, res) {
        try {
            const organizationId = 1
            const { id } = req.params
            const product = {} // await service.findById(productId)

            res.status(200).send({product})
        }catch (error) {
            res.status(500).send({ msg: error.message})
        }
    }
}
module.exports = new ApiProduct()