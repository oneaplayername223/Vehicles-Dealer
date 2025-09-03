import { Router } from "express";
import { postAddCarController } from "../Controllers/sellerControllers.js";


const sellerRoutes = Router();


sellerRoutes.post('/vendedor/agregar/autos', postAddCarController)


export default sellerRoutes