const express = require('express');
const router = express.Router();
const {
    getAllExercises,
    getExercise,
    createExercise,
    updateExercise,
    deleteExercise,
    testExercise
} = require('../controllers/exercisecontroller'); 

//Test Route//
router.get('/test', testExercise)
//CRUD ROute//
router.get('/', getAllExercises);
router.get('/:id', getExercise);
router.post('/', createExercise);
router.put('/:id', updateExercise);
router.delete('/:id', deleteExercise);

module.exports = router;