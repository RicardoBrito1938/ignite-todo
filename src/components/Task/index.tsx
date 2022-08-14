import { FontAwesome } from "@expo/vector-icons";
import { HStack, Text, useTheme } from "native-base";

type TaskState = {
  id: string | number[];
  task: string;
  done: boolean;
};

type Prop = {
  data: TaskState;
  onPress: () => void;
  onDelete: () => void;
};

const Task = ({ data, onPress, onDelete }: Prop) => {
  const { colors } = useTheme();
  return (
    <HStack alignItems="center" bg="gray.500" p={3} mb={2}>
      <FontAwesome
        name={data.done ? "check-circle" : "circle-thin"}
        size={24}
        color={colors.blueDark}
        onPress={onPress}
      />
      <Text
        strikeThrough={!!data.done}
        fontWeight={400}
        color={data.done ? "gray.300" : "gray.100"}
        flex={1}
        mx={2}
      >
        {data.task}
      </Text>

      <FontAwesome
        name="trash-o"
        size={18}
        color={colors.gray[300]}
        onPress={onDelete}
      />
    </HStack>
  );
};

export default Task;
