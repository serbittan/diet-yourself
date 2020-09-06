const { Schema } = require("mongoose")
const { foods } = require("../../diet-yourself-utils/constants")

module.exports = new Schema({
    name: { 
        type: String,
        required: true,
        enum: foods.map(food => food.name)
    },
    quantity: { 
        type: Number,
        required: true
    }
})