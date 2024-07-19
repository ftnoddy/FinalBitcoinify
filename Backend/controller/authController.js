import User from '../model/userModel.js';
import jwt from 'jsonwebtoken';
import asyncHandler from '../middleware/asyncHandler.js';

// Utility function to generate a token
const generateToken = (id, email) => {
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
};

// Utility function to format the response
const formatResponse = (status, message, data = {}) => {
  return { status, message, ...data };
};

// Register User
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user) {
    return res.status(400).json(formatResponse('error', 'User already exists'));
  }

  user = new User({ name, email, password });
  await user.save();

  const token = generateToken(user._id, user.email);

  res.status(201).json(
    formatResponse('success', 'User registered successfully', {
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
      token,
    })
  );
});

// Login User
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id, user.email);

    res.status(200).json(
      formatResponse('success', 'User logged in successfully', {
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        },
        token,
      })
    );
  } else {
    res.status(401).json(formatResponse('error', 'Invalid email or password'));
  }
});

// Logout User
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json(formatResponse('success', 'Logged out successfully'));
});

export { registerUser, loginUser, logoutUser };
