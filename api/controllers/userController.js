const User = require('../models/userModels');

exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(201).json({
      status: "success",
      results: users.length,
      data: {
        users
      }
    });
  };