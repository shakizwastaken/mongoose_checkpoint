const User = require("../models/userModel");

//save a new user to database
const createUser = async (req, res, next) => {
  try {
    const user = new User({ ...req.body });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//find all users
const findAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

//find user from id
const findUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    //need to add more security here
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//find user from username
const findUserByUsername = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    //need to add more security here
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//update user in database
const updateUser = async (req, res, next) => {
  try {
    await User.updateOne({ username: req.params.username }, { ...req.body });
    res
      .status(200)
      .json({ status: "success", msg: "successfully updated user !" });
  } catch (err) {
    next(err);
  }
};

//delete user from database
const deleteUser = async (req, res, next) => {
  try {
    await User.deleteOne({ username: req.params.username });
    res.status(200).json({
      status: "success",
      msg: "user removed from database successfully",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createUser,
  deleteUser,
  findUserByUsername,
  findAllUsers,
  updateUser,
  findUserById,
};
