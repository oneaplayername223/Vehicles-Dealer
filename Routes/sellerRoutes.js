import { Router } from "express";
import { postAddCarController, postviewCarController, postviewCarByIdController, postDeleteCarController } from "../Controllers/sellerControllers.js";


const sellerRoutes = Router();


sellerRoutes.post('/vendedor/agregar/autos', postAddCarController)
sellerRoutes.get('/vendedor/autos', postviewCarController)
sellerRoutes.get('/vendedor/autos/:id', postviewCarByIdController)
sellerRoutes.delete('/vendedor/eliminar/autos/:id', postDeleteCarController)

export default sellerRoutes