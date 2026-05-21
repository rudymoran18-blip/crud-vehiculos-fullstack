const { DataTypes } = require('sequelize');
const db = require('../config/db.config');

const Vehiculo = db.define('Vehiculo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    placa: {
        type: DataTypes.STRING(15), // Es buena práctica delimitar la longitud
        allowNull: false,
        unique: true
    },
    marca: {
        type: DataTypes.STRING(50),
        allowNull: false
    },  
    modelo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    reparado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'vehiculos',
    // 1. Activamos los timestamps para que Sequelize cree createdAt y updatedAt
    timestamps: true, 
    // 2. Activamos el borrado lógico profesional
    paranoid: true, 
    // 3. Opcional: Si prefieres nombres con guiones bajos en tu BD (created_at, updated_at, deleted_at)
    underscored: true 
});

module.exports = Vehiculo;