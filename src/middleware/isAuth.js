
function isAuth(req,res,next){
    if(req.isAuthenticated()){
        next()
    } else {
        res.render("login")
    }
}

export default isAuth