const {getVehiculos, getVehiculoById,createVehiculo, updateVehiculo, deleteVehiculo} = require('../controllers/vehiculo.controller');
const express = require('express');
const router = express.Router();


router.get('/', getVehiculos);
router.get('/:id', getVehiculoById);
router.post('/', createVehiculo);
router.put('/:id', updateVehiculo);
router.delete('/:id', deleteVehiculo);
module.exports = router;