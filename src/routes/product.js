const express = require('express')
const ApiProduct = require('../api/product')
const authMiddleware = require('../middleware/auth')

const ProductRouter = express.Router();

ProductRouter.get('/', authMiddleware(),ApiProduct.FindAll) //pegar todos 
ProductRouter.get('/:id', authMiddleware(),ApiProduct.FindById) //pegar um
ProductRouter.post('/', authMiddleware(),ApiProduct.Create)
ProductRouter.put('/:id', authMiddleware(),ApiProduct.Update)
ProductRouter.delete('/:id', authMiddleware(),ApiProduct.Delete)

module.exports = ProductRouter