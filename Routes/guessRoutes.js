import { Router } from "express";
import {getGuessIndexController, getGuessCarController, getDealerIndexController, getDealerController} from "../Controllers/guessControllers.js";


const guessRoutes = Router();


guessRoutes.get('/autos', getGuessIndexController)
guessRoutes.get('/autos/:id', getGuessCarController)
guessRoutes.get('/dealers', getDealerIndexController)
guessRoutes.get('/dealers/:id', getDealerController)
export default guessRoutes