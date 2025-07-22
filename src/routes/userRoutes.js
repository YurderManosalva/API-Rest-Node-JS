const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getUsuarios);
router.get("/:id", userController.getUsuarioById);
router.post("/", userController.postUsuario);
router.put("/:id", userController.putUsuario);
router.delete("/:id", userController.deleteUsuario);

module.exports = router;
