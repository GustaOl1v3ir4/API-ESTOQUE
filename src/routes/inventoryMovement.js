const express = require('express')

const movementRouter = express.Router();

movementRouter.get('/:inventoryId/', () => {}) // pegar todos 
movementRouter.get('/:inventoryId/id', () => {}) // pegar um
movementRouter.post('/:inventoryId/', () => {})
movementRouter.put('/:inventoryId/id', () => {})
movementRouter.delete('/:inventoryId/id', () => {})

module.exports = movementRouter