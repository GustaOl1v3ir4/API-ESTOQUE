const express = require('express')

const inventoryRouter = express.Router();

inventoryRouter.get('/', () => {}) //pegar todos
inventoryRouter.get('/:id', () => {}) //pegar um
inventoryRouter.post('/', () => {})
inventoryRouter.put('/:id', () => {})
inventoryRouter.delete('/:id', () => {})

module.exports = inventoryRouter