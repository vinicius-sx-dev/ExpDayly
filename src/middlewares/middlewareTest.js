async function check(req, res, next) {

  try {
    console.log("Passed by the middleware")
    if(req){
      next()
    }
  
  } catch (error) {
    console.error("Problema no middleware | ", error)
    return res.status(500).json({
      mensagem: "Problema no middleware"
    })
  }
  
}

module.exports = {
  check
}