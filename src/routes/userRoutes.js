const express = require("express");
const {
  createUser,
  deleteUser,
  findAllUsers,
  findUserByUsername,
  updateUser,
  findUserById,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(findAllUsers).post(createUser);

router
  .route("/username/:username")
  .get(findUserByUsername)
  .post(updateUser)
  .delete(deleteUser);

router.route("/username/:id").get(findUserById);

module.exports = router;
