const { json } = require('body-parser');
const User = require('../models/user');

async function handleGetAllUsers(req,res){
    const allUsers = await User.find({});
    return res.json(allUsers);
}

async function handleGetUserById(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({erro:'User not found'});
    return res.json(user);
}

async function handleUpdateUserById(req,res){
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,          // return updated document
        runValidators: true // validate schema rules
      }
    );

    if (!updatedUser) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.status(200).json({
      msg: "User updated successfully",
      data: updatedUser
    });

  } catch (error) {
    return res.status(500).json({
      msg: "Server Error",
      error: error.message
    });
  }
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status: 'Success'});
}

async function handleCreateNewUser(req,res){
    const body = req.body;
    if(
        !body ||
        !body.firstName ||
        !body.email ||
        !body.phone ||
        !body.role ||
        !body.status
    ) return res.status(400).json({'msg': 'All feild required'})

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        address: body.address,
        role: body.role,
        status: body.status,
    });

    return res.status(201).json({msg:"Success",id:result._id});
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}

