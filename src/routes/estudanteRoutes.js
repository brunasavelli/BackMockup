const express = require('express');
const router = express.Router();

const estudanteController = require("../controllers/estudanteController");
const apiKeyMiddleware = require("../config/apiKey");

router.get("/", estudanteController.getAllEstudantes);

module.exports = router;