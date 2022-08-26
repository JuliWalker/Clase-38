import dotenv from 'dotenv'
import {Router} from 'express'
import nodemailer from 'nodemailer'
import { usersDao as api } from '../database/daos/index.js'

dotenv.config()
const router = Router();

function isAuth(req,res,next){
    if(req.isAuthenticated()){
        next()
    } else {
        res.render("login")
    }
}

router.get('/registro', isAuth, async (req,res)=>{
    try {

        const usuario = await api.getOne(req.session.passport.user)

        let nombre = usuario.nombre
        let apellido = usuario.apellido
        let email = usuario.email

        let htmlTemplate = `
        <h1>Bienvenido ${nombre} ${apellido}</h1>
        <p>
        Su correo ${email} ha sido registrado con éxito.
        </p>
        `;

        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            auth: {
              user: process.env.USER_ETHEREAL,
              pass: process.env.PASS_ETHEREAL,
            },
          });

        await transporter.sendMail({
            from: 'Juli app',
            to: email,
            subject: 'Regitro de usuario en Juli app',
            html: htmlTemplate,
          });

          res.redirect("/api/productos");

    } catch (error) {
        console.log(error)
    }    
});

export default router;