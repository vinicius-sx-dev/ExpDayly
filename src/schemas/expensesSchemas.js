const { verifyEmail } = require('../utils/emailRegex')

function validateFields(fields, req, res){

  const camposEnviados = Object.keys(req.body)

  const camposExtras = camposEnviados.filter(campo => !fields.includes(campo))

  if(camposExtras.length > 0){
    return res.status(422).json({
      mensagem: `Campos não permitidos: ${camposExtras.join(", ")}`
  })
  }

  return;
}


function verifyInsertValue(req, res, next) {

  validateFields(['type', 'gender', 'amount', 'datetime', 'description'], req, res)

  const { type, gender, amount, datetime } = req.body

  if (!type || !gender || !amount) return res.status(401).json({ mensagem: "Campos obrigatórios" });

  const cleanedType = String(type).trim();
  const cleanedGender = String(gender).trim();
  const cleanedAmount = String(amount).trim();
  const cleanedDatetime = String(datetime).trim();

  const splitDatetime = cleanedDatetime.split('')

  const mysqlDateTimeRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) ([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;

  if (!mysqlDateTimeRegex.test(cleanedDatetime)) return res.status(403).json({ mensagem: "Data inválida " })

  if (cleanedType != 'expense' && cleanedType != 'income' && cleanedType != 'saving') return res.status(403).json({ mensagem: "Tipo inválido" })

  if (Number(cleanedAmount) <= 0) return res.status(403).json({ mensagem: "Tipo inválido" })

  next();
}


module.exports = {
    verifyInsertValue
}