

export function logout(req, res){
    const nombre = req.session.nombre;
    res.render("logout", { nombre });
    req.session.destroy((err) => {
    if (!err) { 
       console.log("Session destroyed");
     } else {
       res.send({ status: "Error al borrar session" });
    }
  });  
}
