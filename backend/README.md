## Modelo de datos

La tabla `vehiculos` incluye:

- Placa única (`UNIQUE`)
- Eliminación lógica con Sequelize (`paranoid`)
- Timestamps automáticos:
  - created_at
  - updated_at
  - deleted_at

## Eliminación lógica

El sistema utiliza `paranoid: true` de Sequelize para implementar soft delete.

Cuando un vehículo es eliminado:
- No se elimina físicamente de la base de datos
- Sequelize llena automáticamente el campo `deleted_at`
- Las consultas normales no muestran registros eliminados