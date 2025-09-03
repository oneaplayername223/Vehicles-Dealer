import { Router } from "express";
import { postAddCarController, postviewCarController, postviewCarByIdController, postDeleteCarController, postEditCarController } from "../Controllers/sellerControllers.js";


const sellerRoutes = Router();


sellerRoutes.post('/vendedor/agregar/autos', postAddCarController)
sellerRoutes.get('/vendedor/autos', postviewCarController)
sellerRoutes.get('/vendedor/autos/:id', postviewCarByIdController)
sellerRoutes.delete('/vendedor/eliminar/autos/:id', postDeleteCarController)
sellerRoutes.patch('/vendedor/editar/autos/:id', postEditCarController)

export default sellerRoutes