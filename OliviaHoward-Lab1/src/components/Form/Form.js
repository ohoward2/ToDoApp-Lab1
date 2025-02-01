import { View, Text, TextInput, Button, Keyboard } from "react-native";
import styles from "./styles";
import { useState } from "react";

//Component for the 'add task' form
export default function Form(props) {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskStatus, setTaskStatus] = useState(false);
  const [titleError, setTitleError] = useState(null);

  //Handle 'add task' button press
  const handleAddButtonTap = () => {
    if (taskTitle) {
      props.onAddTask(taskTitle, taskStatus);
      setTitleError(null);
      setTaskTitle("");
      setTaskStatus(false);
      Keyboard.dismiss();
    } else {
      setTitleError("*Task Title is required.");
    }
  };

  //Handle 'title text input' text changing
  const handleTitleChange = (value) => {
    setTaskTitle(value);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.text}
        placeholder="Enter a new task title"
        maxLength={150}
        onChangeText={handleTitleChange}
        defaultValue={taskTitle}
      />
      <Button title="Add Task" onPress={handleAddButtonTap} />
      <Text style={styles.errorText}>{titleError}</Text>
    </View>
  );
}
