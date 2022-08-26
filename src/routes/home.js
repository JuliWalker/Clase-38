import { Router } from "express";
import isAuth from "../middleware/isAuth";

const router = Router();

router.get("/",isAuth, (req, res) => {
        res.redirect("/api/productos");
});



export default router;