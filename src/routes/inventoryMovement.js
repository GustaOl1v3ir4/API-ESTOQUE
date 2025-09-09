const express = require('express');
const inventoryMovement = require('../api/inventoryMovement');

const movementRouter = express.Router();

movementRouter.get('/:inventoryId', inventoryMovement.FindAll)
movementRouter.get('/:inventoryId/:id', inventoryMovement.FindById)
movementRouter.post('/:inventoryId', inventoryMovement.Create)
movementRouter.put('/:inventoryId/:id', inventoryMovement.Update)
movementRouter.delete('/:inventoryId/:id', inventoryMovement.Delete)


module.exports = movementRouter