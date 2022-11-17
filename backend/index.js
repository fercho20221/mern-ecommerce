// express https://expressjs.com/es/ from "express";
import express from "express";
import dotenv from 'dotenv'; 
import cors from 'cors'; 
import fileupload from 'express-fileupload';

import conectarDB from './config/db.js'; 
import usuarioRoutes from './routes/usuarioRoutes.js'; 
import productosRoutes from './routes/productoRoutes.js'; 
import ventasRoutes from './routes/ventaRoutes.js'; 

const PORT = process.env.PORT || 4000;
dotenv.config();

// Se le agrega toda la funcionalidad del servidor de express const app = express(); app.use(express.json());
const app = express();
app.use(express.json());

// con esta instruccion poermite cargar las imagenes
app.use(fileupload({
    useTempFiles: true,
    tempFileDir:'./files'
}))

conectarDB();

// middlewares // Se utiliza para realizar la comunicacion entre el servidor del frontend y el backend 

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
origin: function(origin, callback){ 
    if(dominiosPermitidos.indexOf(origin) !== -1){ 
    // El origen del Request esta permitido
    callback(null, true);
    }
    else{ callback(new Error('No permitido por CORS'));
        }  
                                  }

    };

    app.use(cors(corsOptions));

    

    // Gestion usuarios

app.use('/api/usuarios', usuarioRoutes);



///Gestion de productos

app.use('/api/productos', productosRoutes);

// . Gestion de Ventas

app.use('/api/ventas', ventasRoutes);

app.listen(PORT, () => { console.log(`Servidor funcionando en el puerto ${PORT} `); 
});