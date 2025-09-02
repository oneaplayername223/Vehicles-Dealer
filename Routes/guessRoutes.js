import { Router } from "express";
import {getGuessIndexController} from "../Controllers/guessControllers.js";


const guessRoutes = Router();


guessRoutes.get('/', getGuessIndexController)


export default guessRoutes