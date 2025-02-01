import { View, Text, ScrollView } from "react-native";
import Task from "./Task/Task";
import styles from "./styles";

//Component for the scroll view of tasks
export default function Tasks(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Tasks:</Text>
      <ScrollView>
        {props.tasks.map((task) => (
          <Task
            key={task.title}
            task={task}
            onStatusChange={props.onStatusChange}
            onDeleteTask={props.onDeleteTask}
          />
        ))}
      </ScrollView>
    </View>
  );
}
