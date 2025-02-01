import { View, Text, Switch } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

//Component for individual task
export default function Task(props) {
  //Handle status change switch being pressed
  const handleStatusChangePress = () => {
    props.onStatusChange(props.task.title);
  };

  //Handle 'delete task' (Trash can icon) pressed
  const handleDeleteTask = () => {
    props.onDeleteTask(props.task.title);
  };

  return (
    <View style={styles.container}>
      <Switch
        value={props.task.status === "done"}
        onValueChange={handleStatusChangePress}
      />
      <View>
        <Text style={styles.text}>{props.task.title}</Text>
        <Text>Status: {props.task.status === "done" ? "Done" : "Due"}</Text>
      </View>
      <Icon
        style={{ marginLeft: "auto" }}
        name="trash"
        color="#FE4A49"
        size={26}
        onPress={handleDeleteTask}
      />
    </View>
  );
}
