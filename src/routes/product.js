const express = require('express')
const ApiProduct = require('../api/product')

const ProductRouter = express.Router();

ProductRouter.get('/', ApiProduct.FindAll) //pegar todos 
ProductRouter.get('/:id', ApiProduct.FindById) //pegar um
ProductRouter.post('/', ApiProduct.Create)
ProductRouter.put('/:id', ApiProduct.Update)
ProductRouter.delete('/:id', ApiProduct.Delete)

module.exports = ProductRouter