const express = require('express')
const ApiInventory = require('../api/inventory')
const authMiddleware = require('../middleware/auth')

const inventoryRouter = express.Router();

inventoryRouter.get('/',authMiddleware(),ApiInventory.FindAll) //pegar todos
inventoryRouter.get('/:id', authMiddleware(),ApiInventory.FindById ) //pegar um
inventoryRouter.post('/', authMiddleware(),ApiInventory.Create)
inventoryRouter.put('/:id', authMiddleware(),ApiInventory.Update)
inventoryRouter.delete('/:id', authMiddleware(),ApiInventory.Delete)

module.exports = inventoryRouter