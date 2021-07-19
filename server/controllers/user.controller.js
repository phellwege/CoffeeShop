const { User } = require('../models/user.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {

    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                res.json({ msg: "success!", user: user });
            })
            .catch(err => res.json(err));
    },
    login(req, res) {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (user === null) {
                    res.status(400).json({ msg: "invalid login attempt" });
                } else {
                    bcrypt
                        .compare(req.body.password, user.password)
                        .then((passwordIsValid) => {
                            if (passwordIsValid) {
                                res
                                    .cookie(
                                        "usertoken",
                                        jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                                        {
                                            httpOnly: true,
                                        }
                                    )
                                    .json({ msg: "success!" });
                            } else {
                                res.status(400).json({ msg: "invalid login attempt" });
                            }
                        })
                        .catch((err) =>
                            res.status(400).json({ msg: "invalid login attempt" })
                        );
                }
            })
            .catch((err) => res.json(err));
    },
    logout(req, res) {
        res
            .cookie("usertoken", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
                httpOnly: true,
                maxAge: 0,
            })
            .json({ msg: "ok" });
    },

    logout2(req, res) {
        res.clearCookie("usertoken");
        res.json({ msg: "usertoken cookie cleared" });
    },
    getLoggedInUser(req, res) {
        const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });

        User.findById(decodedJWT.payload._id)
            .then((user) => res.json(user))
            .catch((err) => res.json(err));
    },

    getUser: (request, response) => {
        User.findOne({ _id: request.params.id })
            .then(data => response.json(data))
            .catch(err => response.json(err.errors))
    },
    getAllUsers: (request, response) => {
        User.find({})
            .then(data => response.json(data))
            .catch(err => response.json(err.errors))
    },
    updateExistingUser: (request, response) => {
        User.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
            .then(updateExistingUser => response.json(updateExistingUser))
            .catch(err => response.json(err.errors));
    },
    deleteUser: (request, response) => {
        User.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err.errors))
    }
}