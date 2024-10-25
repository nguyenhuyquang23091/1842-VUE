// controllers/exerciseController.js

const Exercise = require('../models/Exercise');

// Helper functions for testing
const testDatabaseConnection = async () => {
    try {
        await Exercise.db.collection('exercises').stats();
        return { 
            status: 'success', 
            message: 'Database connection successful' 
        };
    } catch (error) {
        return { 
            status: 'error', 
            message: 'Database connection failed', 
            error: error.message 
        };
    }
};

const testCRUDOperations = async () => {
    try {
        const testExercise = new Exercise({
            name: "Test CRUD Exercise",
            targetMuscle: "Test Muscle",
            difficultyLevel: "beginner"
        });

        const savedExercise = await testExercise.save();
        const readExercise = await Exercise.findById(savedExercise._id);
        await Exercise.findByIdAndUpdate(savedExercise._id, { name: "Updated Test Exercise" });
        await Exercise.findByIdAndDelete(savedExercise._id);

        return { 
            status: 'success', 
            message: 'All CRUD operations successful' 
        };
    } catch (error) {
        return { 
            status: 'error', 
            message: 'CRUD operations test failed', 
            error: error.message 
        };
    }
};

const testDataValidation = async () => {
    try {
        const invalidExercise = new Exercise({});  // Missing required fields

        try {
            await invalidExercise.save();
            return { 
                status: 'error', 
                message: 'Validation test failed - invalid data was accepted' 
            };
        } catch (validationError) {
            return { 
                status: 'success', 
                message: 'Validation working correctly - invalid data rejected' 
            };
        }
    } catch (error) {
        return { 
            status: 'error', 
            message: 'Validation test failed', 
            error: error.message 
        };
    }
};

// Main controller functions
const getAllExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find({});
        res.status(200).json(exercises);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);
        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.status(200).json(exercise);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createExercise = async (req, res) => {
    try {
        const exercise = await Exercise.create(req.body);
        res.status(201).json(exercise);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.status(200).json(exercise);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteExercise = async (req, res) => {
    try {
        const exercise = await Exercise.findByIdAndDelete(req.params.id);
        if (!exercise) {
            return res.status(404).json({ message: 'Exercise not found' });
        }
        res.status(200).json({ message: 'Exercise deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const testExercise = async (req, res) => {
    try {
        const testData = [
            { name: "Test Exercise 1", targetMuscle: "TestMuscle", difficultyLevel: "beginner" },
            { name: "Test Exercise 2", targetMuscle: "TestMuscle2", difficultyLevel: "beginner" }
        ];
        res.status(200).json({
            message: "Test endpoint working",
            testData: testData,
            timestamp: new Date()
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            timestamp: new Date(),
        });
    }
};

module.exports = {
    getAllExercises,
    getExercise,
    createExercise,
    updateExercise,
    deleteExercise,
    testExercise 
};