const mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');
    exports.list_all_tasks = function(req, res) {
        Task.find({}, function(err, task) {
            if (err)
                res.send(err);
            res.json(task);
        });
    };

exports.create_a_task = function(req,res){
    const new_task = new Task(req.body);
    new_task.save(function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    })
};
exports.read_a_task = function(req,res){
    Task.findbyId(req.params.taskId, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    })
};
exports.update_a_task = function(req,res){
    Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task){
        if(err)
            res.send(err);
        res.json(task);
    })};
exports.delete_a_task = function(req, res) {
        Task.deleteOne({ _id: req.params.taskId }, function(err) {
            if (err) {
                res.send(err);
            } else {
                res.json({ message: 'Task successfully deleted' });
            }
        });
    };
    