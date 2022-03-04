import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  // App level state
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  // Add Task
  const addTask = (task) => {
    const id  = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    // Go through each and if the id matches, destructure the properties but flip the value of the reminder
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // Toggle Show Add
  const toggleShowAdd = () => {
    setShowAddTask(!showAddTask)
  }

  return (
    <div className="App container">
      <Header onAdd={toggleShowAdd} showAdd={showAddTask}></Header>
      {showAddTask ? <AddTask onAdd={addTask}></AddTask> : ''}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks> : 'No Tasks To Show'}
    </div>
  );
}

export default App;
