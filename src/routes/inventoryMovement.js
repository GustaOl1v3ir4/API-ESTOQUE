const express = require('express')

const movementRouter = express.Router();

movementRouter.get('/', () => {}) // pegar todos 
movementRouter.get('/:id', () => {}) // pegar um
movementRouter.post('/', () => {})
movementRouter.put('/:id', () => {})
movementRouter.delete('/:id', () => {})

module.exports = movementRouter