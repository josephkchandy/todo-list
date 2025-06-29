import Card from "./card";
import { useState, useEffect } from "react";
import Input from "./input";

const initialTasks = [];

const Tasks = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleTasks = async () => {
    try {
      const response = await fetch("http://localhost:8010");
      const data = await response.json();
      if (data) {
        console.log(data);
        setTasks(data);
      }
    } catch (err) {
      alert("Something Went Wrong", err.message);
    }
  };

  const addTaskHandler = async (newTask) => {
    const body = {
      task_id: Math.random(),
      task_name: newTask,
    };
    try {
      await fetch("http://localhost:8010/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      alert("Something Went Wrong", err.message);
    }
  };

  const deleteTaskHandle = async (id) => {
    try {
      await fetch(`http://localhost:8010/${id}`, {
        method: "DELETE",
      });
      await handleTasks();
    } catch (err) {
      alert("Something Went Wrong", err.message);
    }
  };

  useEffect(() => {
    handleTasks();
  }, []);

  return (
    <>
      <div className="tasks">
        <Input onAddTask={addTaskHandler} />
        {tasks.map((task) => (
          <Card
            key={task.id}
            text={task.task_name}
            id={task.task_id}
            onTaskComplete={deleteTaskHandle}
          />
        ))}
      </div>
    </>
  );
};

export default Tasks;
