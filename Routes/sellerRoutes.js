import { Router } from "express";
import { postAddCarController, postviewCarController, postviewCarByIdController, postDeleteCarController, postEditCarController } from "../Controllers/sellerControllers.js";
import { userAuthorization } from "../middlewares/userAuth.js";
import { validateId } from "../middlewares/validateId.js";
const sellerRoutes = Router();


sellerRoutes.post('/vendedor/agregar/autos', userAuthorization, validateId, postAddCarController)
sellerRoutes.get('/vendedor/autos', userAuthorization, validateId,  postviewCarController)
sellerRoutes.get('/vendedor/autos/:id', userAuthorization, validateId, postviewCarByIdController)
sellerRoutes.delete('/vendedor/eliminar/autos/:id', userAuthorization, validateId, postDeleteCarController)
sellerRoutes.patch('/vendedor/editar/autos/:id', userAuthorization, validateId, postEditCarController)

export default sellerRoutes