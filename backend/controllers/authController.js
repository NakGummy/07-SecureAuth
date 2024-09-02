import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new Error("All fields are required");
    }

    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });
    }

    // const hashedPassword = await bcryptjs.hash(password, JWT_SECRET);
    const hashedPassword = await bcryptjs.hash(password, 10);
    // const verificationToken = tokenizer(12367, 900000);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    await user.save();

    // jwt
    generateTokenAndSetCookie(res, user._id);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log("OMG We got an errorororoororoo");
    console.error(error);
  }
  res.send("signup route");
};

const login = async (req, res) => {
  res.send("login route");
};
const logout = async (req, res) => {
  res.send("logout route");
};

export { signup, login, logout };
