const Category = require('../models/categoryModel.js')

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        if (!categories) {
            console.log('\n\tNo Categories Found\n'.brightRed)
            res.status(404).send('No Categories Found!')
        } else {
            console.log(categories)
            res.status(200).send(categories)
        }
    } catch (error) {
        console.log(error)
    }
}

const getOneCategory = async (req, res) => {
    try {
        const categoryId = req.params.id
        const category = await Category.findById(categoryId)
        if (!category) {
            console.log('\n\tCategory Not Found\n'.brightRed)
            res.status(404).send('Category Not Found!')
        } else {
            console.log(category)
            res.status(200).send(category)
        }
    } catch (error) {
        console.log(error)
    }
}

const updateOneCategory = async (req, res) => {
    try {
        const categoryId = req.params.id
        const category = await Category.findById(categoryId)
        if (!category) {
            console.log('\n\tCategory Not Found\n'.brightRed)
            res.status(404).send('Category Not Found!')
        }
        const updateCategory = await Category.findByIdAndUpdate(categoryId, req.body, { new: true })
        updateCategory.name = req.body.name
        updateCategory.description = req.body.description
        updateCategory.image = req.body.image
        updateCategory.isActive = req.body.isActive
        updateCategory.updatedAt = Date.now
        updateCategory.findByIdAndUpdate(categoryId, updateCategory)
        res.status(200).send(updateCategory)

    } catch (error) {
        console.log(error)
    }
}

const deleteOneCategory = async (req, res) => {
    try {
        const categoryId = req.params.id
        const category = await Category.findById(categoryId)
        if (!category) {
            console.log('\n\tCategory Not Found\n'.brightRed)
            res.status(404).send('Category Not Found!')
        } else {
            const deletedCategory = await Category.findByIdAndDelete(categoryId)
            console.log(`\n\tDeleted Category  \n`.white, deletedCategory)
            res.status(200).send(deletedCategory)
        }
    } catch (error) {
        console.log(error)
    }
}

const createOneCategory = async (req, res) => {

    const { name, image, description, isActive } = req.body

    if (!name) {
        console.log('\n\tCategory Name is required\n'.brightRed)
        res.status(400).send('Category Name field is required!') // TODO: Check if this is the right error
    }

    // Check if name is empty
    const categoryExists = await Category.findOne(name)
    if (categoryExists) {
        console.log('\n\tCategory Name already exists\n'.brightRed)
        res.status(400).send('Category Name already exists!') // TODO: Check if this is the right error
    }

    try {

        // Create new category
        const category = await new Category({
            name,
            description,
            image,
            isActive,
        })

        const newCategory = await category.save()
        console.log(`\n\tCreated Category  \n`.white, newCategory)
        res.status(201).send(newCategory)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllCategories,
    getOneCategory,
    updateOneCategory,
    deleteOneCategory,
    createOneCategory,
}