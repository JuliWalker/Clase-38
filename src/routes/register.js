import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", (req, res) => {
    res.render("registro");
});


router.post("/",passport.authenticate('registro',{
    failureRedirect:'/api/registro/errorRegistro',
    successRedirect:'/api/nodemailer/registro'
})) 

router.get("/errorRegistro", (req, res) => {
    res.render("errorRegistro");
});

export default router;