const express = require('express');
const { enterEmployee } = require('../controllers/emp.controllers');

const router = express.Router();

router.post("/create",enterEmployee)

module.exports = {router}