import { Router } from "express";
import {getGuessIndexController, getGuessCarController, getDealerIndexController} from "../Controllers/guessControllers.js";


const guessRoutes = Router();


guessRoutes.get('/autos', getGuessIndexController)
guessRoutes.get('/autos/:id', getGuessCarController)
guessRoutes.get('/dealers', getDealerIndexController)

export default guessRoutes