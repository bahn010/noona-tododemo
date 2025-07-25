const Task = require('../model/Task');
const taskcontroller = {};

taskcontroller.createTask = async (req, res) => {
    try {
        const { task, isCompleted } = req.body;
        const author = req.userId;
        const newTask = new Task({ task, isCompleted, author });
        await newTask.save();
        res.status(200).json({status: "success", data: newTask});
    } catch (error) {
        res.status(400).json({status: "error", message: error});
    }
};

taskcontroller.getAllTasks = async (req, res) => {
  try {
    const author = req.userId;
    const tasklist = await Task.find({author: author}).select('-__v')
    res.status(200).json({status: "success", data: tasklist});
  } catch (error) {
    res.status(400).json({status: "error", message: error});
  }
};

taskcontroller.updateTask = async (req, res) => {
  try {
    const author = req.userId;
    const { id } = req.params;
    const { task, isCompleted } = req.body;
    const updatedTask = await Task.findByIdAndUpdate({_id: id, author: author}, { task, isCompleted }, { new: true });
    res.status(200).json({status: "success", data: updatedTask});
  } catch (error) {
    res.status(400).json({status: "error", message: error});
  }
};

taskcontroller.deleteTask = async (req, res) => {
  try {
    const author = req.userId;
    const { id } = req.params;
    await Task.findByIdAndDelete({_id: id, author: author});
    res.status(200).json({status: "success", message: "Task deleted successfully"});
  } catch (error) {
    res.status(400).json({status: "error", message: error});
  }
};


module.exports = taskcontroller;