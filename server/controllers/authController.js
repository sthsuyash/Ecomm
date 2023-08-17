const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT } = require('../constants');

exports.register = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    // console.log(first_name, last_name, email, password)

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(401).json({
            message: 'User already exists.'
        });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
        first_name,
        last_name,
        email,
        password: hashedPassword
    });
    await user.save();

    res.status(201).json({
        message: 'User created successfully!'
    });
}

exports.login = async (req, res) => {
    const { email, password } = req.body;
    // console.log(JWT.JWT_SECRET)

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
        res.status(401).json({
            message: 'There is no user with this email!'
        });
    }
    else {
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            res.status(401).json({
                message: 'Invalid password!'
            });
        }
        else {
            const user = {
                id: existingUser._id,
                email: existingUser.email
            };
            const token = jwt.sign(
                { user }, JWT.JWT_SECRET, { expiresIn: '1h' });

            res.status(200).json({
                message: 'Logged in successfully!',
                token: token,
                // user: user
            });
        }
    }
}


exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            res.status(404).json({
                message: 'User not found!'
            });
        }
        else {
            res.status(200).json({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Server Error'
        });
    }
}
