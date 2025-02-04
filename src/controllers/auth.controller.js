import User from "../models/user.models.js";
import bcrypt from 'bcryptjs';


export const register = async (req, res) => {
  const { username, email, password } = req.body;
  

  try {

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

     const userSaved = await newUser.save();
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt
    })
  } catch (error) {
    console.log(error);
  }

};

export const login = (req, res) => {
  res.send("Logueando el Usuario");
};
