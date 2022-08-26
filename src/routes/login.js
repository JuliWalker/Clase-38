import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/", (req, res) => {
    res.render("login");
});

router.post("/",passport.authenticate('login',{
    failureRedirect:'/api/login/errorLogin',
    successRedirect:'/api/productos'
})) 

router.get("/errorLogin", (req, res) => {
    res.render("errorLogin");
});

export default router;