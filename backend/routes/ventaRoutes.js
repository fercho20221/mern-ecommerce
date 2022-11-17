import express from 'express'; 
import { 
    prueba,
    createVentas, 
    getVentas, 
    getVenta, 
    updateVentas
    }
 from '../controllers/ventaController.js';

const router = express.Router();

// Rutas Publicas 
router.get('/prueba', prueba);

// Rutas Gestion Ventas 
router.post('/create', createVentas); 
router.get('/get', getVentas); 
router.get('/get/:id', getVenta);    ///  Cuando hay dos puntos: quiere decir que envia la ruta y un parametro
router.put('/update/:id', updateVentas); 


export default router;