const express = require('express')

const ProductRouter = express.Router();

ProductRouter.get('/', () => {}) //pegar todos 
ProductRouter.get('/:id', () => {}) //pegar um
ProductRouter.post('/', () => {})
ProductRouter.put('/:id', () => {})
ProductRouter.delete('/:id', () => {})

module.exports = ProductRouter