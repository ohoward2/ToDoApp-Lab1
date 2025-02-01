import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import styles from "./src/styles/main";
import { useState } from "react";

export default function App() {
  //Some Defauly pre populated tasks in task list to show tasks on load
  const [tasks, setTasks] = useState([
    {
      title: "Do iOS Lab",
      status: false,
    },
    {
      title: "Study for quiz",
      status: false,
    },
  ]);

  //Handle "add task" button pressed
  const handleAddTask = (taskTitle, taskStatus) => {
    const updatedTasks = [...tasks];
    updatedTasks.push({
      title: taskTitle,
      status: taskStatus,
    });
    setTasks(updatedTasks);
  };

  //Handle status switch being pressed
  const handleTaskStatusChange = (title) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.title === title
          ? { ...task, status: task.status === "done" ? "due" : "done" }
          : task
      );
      console.log(updatedTasks);
      return updatedTasks;
    });
  };

  //Handle 'delete task' (Trash can icon) pressed
  const handleDeleteTask = (title) => {
    const updatedTasks = tasks.filter((task) => task.title !== title);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.headerText}>ToDo App</Text>
      </View>
      <Form onAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        onStatusChange={handleTaskStatusChange}
        onDeleteTask={handleDeleteTask}
      />
    </View>
  );
}