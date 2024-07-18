import User from '../model/userModel.js';
import jwt from 'jsonwebtoken';
import asyncHandler from '../middleware/asyncHandler.js';

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }

  user = new User({
    name,
    email,
    password,
  });

  await user.save();

  const token = jwt.sign(
    { email: user.email, id: user._id },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token,
    isAdmin: user.isAdmin,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
});

export { registerUser, loginUser, logoutUser };
