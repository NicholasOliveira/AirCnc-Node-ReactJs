const Admin = require('../models/Admin')

module.exports = {

  async store(req, res) {

    const { login, nome, senha } = req.body;
    const admin = await Admin.create({
      login,
      nome,
      senha
    })

    return res.json(admin);
  },

  async show(req, res) {

    const { login, nome, senha } = req.body;

    const admin = await Admin.findOne({
      login,
      senha
    })

    if (!admin) {
      return res.status(500).json({
        error: "User not valid"
      })
    }
    return res.json(admin);
  }

}
