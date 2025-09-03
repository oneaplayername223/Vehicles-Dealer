import { Router } from "express";
import {getGuessIndexController, getGuessCarController, getDealerIndexController, getDealerController, postRegisterController
, postLoginController


} from "../Controllers/guessControllers.js";


const guessRoutes = Router();


guessRoutes.get('/autos', getGuessIndexController)
guessRoutes.get('/autos/:id', getGuessCarController)
guessRoutes.get('/dealers', getDealerIndexController)
guessRoutes.get('/dealers/:id', getDealerController)
guessRoutes.post('/register', postRegisterController)
guessRoutes.post('/login', postLoginController)
export default guessRoutes