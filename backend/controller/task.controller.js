const Task = require('../model/Task');
const taskcontroller = {};

taskcontroller.createTask = async (req, res) => {
    try {
        const { task, isCompleted } = req.body;
        const newTask = new Task({ task, isCompleted });
        await newTask.save();
        res.status(200).json({status: "success", data: newTask});
    } catch (error) {
        res.status(400).json({status: "error", message: error});
    }
};

taskcontroller.getAllTasks = async (req, res) => {
  try {
    const tasklist = await Task.find().select('-__v');
    res.status(200).json({status: "success", data: tasklist});
  } catch (error) {
    res.status(400).json({status: "error", message: error});
  }
};

taskcontroller.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { task, isCompleted } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(id, { task, isCompleted }, { new: true });
    res.status(200).json({status: "success", data: updatedTask});
  } catch (error) {
    res.status(400).json({status: "error", message: error});
  }
};

taskcontroller.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({status: "success", message: "Task deleted successfully"});
  } catch (error) {
    res.status(400).json({status: "error", message: error});
  }
};


module.exports = taskcontroller;