const express = require("express");
const router = express.Router();
const { tasks } = require("./data");

let currentFocusedTaskId = null;

router.post("/tasks", (req, res) => {
  const { title, effortLevel } = req.body;

  if (!title || !effortLevel) {
    return res.status(400).json({ error: "Title and effort level required" });
  }

  const task = {
    id: Date.now(),
    title,
    effortLevel,
    status: "PENDING",
    createdAt: new Date(),
    isFocused: false
  };

  tasks.push(task);
  res.json(task);
});

router.get("/tasks", (req, res) => {
  res.json(tasks);
});

router.post("/tasks/:id/focus", (req, res) => {
  tasks.forEach(t => (t.isFocused = false));
  currentFocusedTaskId = Number(req.params.id);

  const task = tasks.find(t => t.id === currentFocusedTaskId);
  if (task) task.isFocused = true;

  res.json(task);
});

router.post("/tasks/:id/complete", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (task) {
    task.status = "COMPLETED";
    task.isFocused = false;
    currentFocusedTaskId = null;
  }
  res.json(task);
});

module.exports = router;
