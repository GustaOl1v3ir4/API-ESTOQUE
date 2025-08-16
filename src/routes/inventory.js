const express = require('express')
const ApiInventory = require('../api/inventory')

const inventoryRouter = express.Router();

inventoryRouter.get('/', ApiInventory.FindByAll) //pegar todos
inventoryRouter.get('/:id', ApiInventory.FindById ) //pegar um
inventoryRouter.post('/', ApiInventory.Create)
inventoryRouter.put('/:id', ApiInventory.Update)
inventoryRouter.delete('/:id', ApiInventory.Delete)

module.exports = inventoryRouter