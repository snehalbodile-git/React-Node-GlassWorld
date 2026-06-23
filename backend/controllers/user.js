const { json } = require("body-parser");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

async function handleGetAllUsers(req, res) {
  const allUsers = await User.find({}).select("-password");
  return res.json({
    success: true,
    data: allUsers,
  });
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ erro: "User not found" });
  return res.json({
    success: true,
    data: user,
  });
}

async function handleUpdateUserById(req, res) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // return updated document
      runValidators: true, // validate schema rules
    });

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({
      msg: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Server Error",
      error: error.message,
    });
  }
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.email ||
    !body.phone ||
    !body.role ||
    !body.status
  )
    return res.status(400).json({ msg: "All feild required" });

  const existingUser = await User.findOne({ email: body.email });
  if (existingUser) {
    return res.status(400).json({
      msg: "Email already exists",
    });
  }

  const hashedPassword = await bcrypt.hash("Admin@123", 10); // for temp password we need to take it from user in future
  try {
    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: hashedPassword,
      phone: body.phone,
      address: body.address,
      role: body.role,
      status: body.status,
    });

    return res.status(201).json({ msg: "Success", id: result._id });
  } catch (error) {
    return res.status(500).json({
      msg: "Failed to create user",
      error: error.message,
    });
  }
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(401).json({ message: "Invalid Email Id" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // remove password before sending
  const userResponse = user.toObject ? user.toObject() : user;
  delete userResponse.password;
 return res.json({
    success: true,
    data: userResponse,
  });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
  handleLogin,
};
