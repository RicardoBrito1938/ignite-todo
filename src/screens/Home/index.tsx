import {
  FlatList,
  HStack,
  IconButton,
  useTheme,
  VStack,
  Text,
  Divider
} from "native-base";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import uuid from "react-native-uuid";
import Task from "../../components/Task";
import Info from "../../components/Info";
import NoTasks from "../../components/NoTasks";

type TaskState = {
  id: string | number[];
  task: string;
  done: boolean;
};

const Home = () => {
  const { colors } = useTheme();
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState<TaskState[]>([]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newList = [...tasks];
      newList.push({
        id: uuid.v4(),
        task: newTask.trim(),
        done: false
      });
      setTasks(newList);
      setNewTask("");
    }
  };

  const deleteItem = (index: number) => {
    let newList = [...tasks];
    newList = newList.filter((_, i) => i !== index);
    setTasks(newList);
  };

  const toggleDone = (index: number) => {
    let newList = [...tasks];
    newList[index].done = !newList[index].done;
    setTasks(newList);
  };

  return (
    <VStack flex={1} bg="gray.600">
      <Header />
      <VStack px={6}>
        <HStack mt={-27}>
          <Input
            value={newTask}
            placeholder="Add a new task"
            onChangeText={setNewTask}
            flex={1}
          />
          <IconButton
            ml={1}
            w={52}
            bg="blueDark"
            onPress={() => handleAddTask()}
            icon={
              <AntDesign
                name="pluscircleo"
                size={16}
                color={colors.gray[100]}
              />
            }
          />
        </HStack>

        <Info tasks={tasks} />

        <FlatList
          data={tasks}
          keyExtractor={item => String(item.id)}
          renderItem={({ item, index }) => (
            <Task
              onPress={() => toggleDone(index)}
              data={item}
              onDelete={() => deleteItem(index)}
            />
          )}
          ListEmptyComponent={() => <NoTasks />}
        />
      </VStack>
    </VStack>
  );
};

export default Home;
