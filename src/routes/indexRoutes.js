import { Router } from "express";

/** Routes */
import homeRouter from './home.js';
import routesProducts from './products.js'
import carritosRouter from "./CarritosRoutes.js";
import loginRouter from './login.js';
import logoutRouter from './logout.js';
import registerRouter from './register.js';
import nodemailer from './nodemailer.js';

const router = Router();

router.use('/', homeRouter);
router.use('/productos',routesProducts)
router.use('/carrito',carritosRouter)
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/registro', registerRouter);
router.use('/nodemailer', nodemailer);

export default router;