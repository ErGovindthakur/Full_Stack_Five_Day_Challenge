const { EmpData } = require("../models/emp.models");

const enterEmployee = async (req, res) => {
  const { name, email, role, date } = req.body;
  try {
    if (!name || !email || !role || !date) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    await EmpData.create({
      name,
      email,
      role,
      date,
    });

    return res.status(201).json({
      success: true,
      message: "selected successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {enterEmployee}