const express = require("express");
const router = express.Router();
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
  handleLogin
} = require("../controllers/user");

router.get("/", handleGetAllUsers);
router.post("/login", handleLogin);

router
.route("/:id")
.get(handleGetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

router.post("/",handleCreateNewUser);

module.exports = router;
