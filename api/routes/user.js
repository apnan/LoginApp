const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt')

//GET ALL USERS
router.get('/', async(req, res) => {
    try {
        const users = await UserModel.find();
        console.log(users);
        res.status(201).json(users);
    } catch (error) {
        res.status(500).json({ message: error })
    }
});

//CREATE NEW USER
router.post('/signup', async(req, res) => {
    try {
        const existingUser = await UserModel.find({ email: req.body.email })
        if (existingUser.length !== 0) {
            return res.status(409).json({ message: "The User does exist ..." })
        }
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const user = new UserModel({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword,
        });
        const createdUser = await user.save();
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(500).json({ message: error })
    }
});

router.post('/login', (req, res) => {
    UserModel.findOne({ email: req.body.email }).exec()
        .then(user => {
            if (user) {
                verifyPassword(user, req, res)
            } else {
                res.json({ message: "Incorrect email or password..." })
            }
        }).catch(error => {
            res.status(500).json({ message: `error : ${error}` })
        })
})



module.exports = router;