const User = require('../models/userModel.js')
const colors = require('colors')

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        if (users.length === 0) {
            console.log('\n\tNo users found!\n'.red)
            res.status(404).send('No users found!')
        } else {
            console.log(`${users}\n`)
            res.status(200).send(users)
        }

    } catch (error) {
        console.log(error)
    }
}

const getOneUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            console.log('\n\tUser Not Found\n'.brightRed)
            res.status(404).send('User Not Found!')
        } else {
            console.log(user)
            res.status(200).send(user)
        }
    } catch (error) {
        console.log(error)
    }
}

const updateOneUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findById(userId)
        if (!user) {
            console.log('\n\tUser Not Found\n'.brightRed)
            res.status(404).send('User Not Found!')
        } else {
            user.name = req.body.name
            user.password = req.body.password
            user.isAdmin = req.body.isAdmin
            user.isActive = req.body.isActive
            user.updatedAt = Date.now
            user.findByIdAndUpdate(userId, user)
            console.log(`\n\tUpdated User: \n`.white, user)
            res.status(200).send(user)
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteOneUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findById(userId)
        if (!user) {
            console.log(`\n\tUser id ${userId} Not Found\n`.brightRed)
            res.status(404).send('User to be deleted, Not Found!')
        } else {
            const deletedUser = await User.findByIdAndDelete(userId)
            console.log(`\n\tDeleted User  \n`.white, deletedUser)
            res.status(200).send(deletedUser)
        }
    } catch (error) {
        console.log(error)
    }
}

const createOneUser = async (req, res) => {
    const { name, email, password, isAdmin, isActive } = req.body

    if (!name || !email || !password) {
        console.log('\n\tMissing Fields\n'.brightRed)
        res.status(400).send('Missing Fields')
    }
    // Check if user already exists
    const userExists = await User.findOne({ email })
    if (userExists) {
        console.log('\n\tUser already exists\n'.brightRed)
        res.status(400).send('User already exists')
    }

    try {
        // Create new user
        const user = await new User({
            name,
            email,
            password,
            isAdmin,
            isActive,
        })

        const newUser = await user.save()
        console.log(`\n\tCreated User  \n`.white, newUser)
        res.status(201).send(newUser)
    } catch (error) {
        console.log(error)

    }
}

module.exports = {
    getAllUsers,
    getOneUser,
    updateOneUser,
    deleteOneUser,
    createOneUser,
}