const userModel = require("../models/userModel");

module.exports = {
  getUsuarios: (req, res) => {
    userModel.getUsuarios((err, result) => {
      if (err) {
        res.status(500).json({ errorr: err.message });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  getUsuarioById: (req, res) => {
    const { id } = req.params;
    userModel.getUsuarioById(id, (err, result) => {
      if (err) {
        res.status(500).json({ errorr: err.message });
        return;
      }

      if (result.length === 0) {
        res.status(404).json({ message: "Usuario no encontrado" });
        return;
      }

      res.status(200).json({ data: result });
    });
  },

  postUsuario: (req, res) => {
    const { name, user_name, date_registry } = req.body;
    userModel.postUsuario(name, user_name, date_registry, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      res.status(201).json({
        message: "usuario creado correctamente",
        data: { idInsertado: result },
      });
    });
  },

  putUsuario: (req, res) => {
    const { id } = req.params;
    const { name, user_name, date_registry } = req.body;

    userModel.putUsuario(id, name, user_name, date_registry, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Usuario No Encontrado" });
        return;
      }
      res.status(200).json({ message: "Usuario actualizado correctamente" });
    });
  },

  deleteUsuario: (req, res) => {
    const { id } = req.params;

    userModel.deleteUsuario(id, (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Usuario No Encontrado" });
        return;
      }

      res.status(200).json({ message: "Usuario eliminado correctamente" });
    });
  },
};
