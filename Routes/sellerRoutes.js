import { Router } from "express";
import { postAddCarController, postviewCarController, postviewCarByIdController } from "../Controllers/sellerControllers.js";


const sellerRoutes = Router();


sellerRoutes.post('/vendedor/agregar/autos', postAddCarController)
sellerRoutes.get('/vendedor/autos', postviewCarController)
sellerRoutes.get('/vendedor/autos/:id', postviewCarByIdController)

export default sellerRoutes