const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        trim: true
    },
    targetMuscle: {
        type: String,
        required: true,
        trim: true
    },
    difficultyLevel: {
        type: String, 
        required: true, 
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;