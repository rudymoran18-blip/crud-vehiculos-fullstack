const app = require('./app');
const db = require('./config/db.config');
const routerVehiculo  = require('./routes/vehiculos.route');


// Sincronizar la base de datos 
const PORT = process.env.PORT || 3000;


const server = async () => {
    try {
        await db.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
        app.use('/api/vehiculos', routerVehiculo);
       
        app.listen(PORT, () => {    
            console.log(`Servidor escuchando en el puerto ${PORT}`);
        });

    } catch (error) {
        console.error('Error al iniciar el servidor', error);
    }
};

server();