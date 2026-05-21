const Vehiculo = require("../models/vehiculo.model");
const { get } = require("../routes/vehiculos.route");

// Obtener todos los vehículos

const getVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.findAll();
    if (!vehiculos.length) {
      return res.status(404).json({
        message: "No se encontraron vehículos",
        vehiculos: [],
      });
    }
    res.status(200).json({ vehiculos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getVehiculoById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehiculo = await Vehiculo.findByPk(id);
    if (!vehiculo) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }
    res.status(200).json({ vehiculo });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createVehiculo = async (req, res) => {
  try {
    const { placa, marca, modelo, anio, color, reparado } = req.body;
    
    const nuevoVehiculo = await Vehiculo.create({
      placa,
      marca,
      modelo,
      anio,
      color,
      reparado,
    });
    
    res.status(201).json({
      message: "Vehículo creado exitosamente",
      vehiculo: nuevoVehiculo,
    });
    console.log(nuevoVehiculo);

  } catch (error) {
    // 1. Detectamos si el error es por romper la restricción UNIQUE
    if (error.name === 'SequelizeUniqueConstraintError') {
        console.log('Error:', error.name);
      return res.status(400).json({ 
        message: "La placa ingresada ya está registrada en el sistema." 
      });
    }

    // 2. Si ocurre cualquier otro tipo de error, responde con el 500 genérico
    res.status(500).json({ message: error.message });
  }
};

const updateVehiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const { placa, marca, modelo, anio, color, reparado } = req.body;
    const vehiculo = await Vehiculo.findByPk(id);
    if (!vehiculo) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }
    await vehiculo.update({
      placa: placa ?? vehiculo.placa,
      marca: marca ?? vehiculo.marca,
      modelo: modelo ?? vehiculo.modelo,
      anio: anio ?? vehiculo.anio,
      color: color ?? vehiculo.color,
      reparado: reparado ?? vehiculo.reparado,
    });
    res.status(200).json({ message: "Vehículo actualizado exitosamente", vehiculo });
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
        console.log('Error:', error.name);
      return res.status(400).json({
        message: "La placa ingresada ya está registrada en el sistema."
      });
    }
    res.status(500).json({ message: error.message });
  }
};

const deleteVehiculo = async (req, res) => {
    try {
        const { id } = req.params;
        const vehiculo = await Vehiculo.findByPk(id);
        if (!vehiculo) {
            return res.status(404).json({ message: "Vehículo no encontrado" });
        }
        await vehiculo.destroy(); // Esto realizará un borrado lógico debido a 'paranoid: true'
        res.status(200).json({ message: "Vehículo eliminado exitosamente" });
    }
    catch (error) {
        console.log('Error:', error.name);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
  getVehiculos,
  getVehiculoById,
  createVehiculo,
  updateVehiculo,
  deleteVehiculo,
};
