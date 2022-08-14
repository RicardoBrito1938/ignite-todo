import { Center, HStack, Text, View } from "native-base";

type Tasks = {
  id: string | number[];
  task: string;
  done: boolean;
};

type Props = {
  tasks: Tasks[];
};

const Info = ({ tasks }: Props) => {
  const tasksClosed = tasks.reduce((acc, item) => {
    if (item.done) {
      acc += 1;
    }
    return acc;
  }, 0);

  return (
    <HStack justifyContent="space-between" mt={8} mb={4}>
      <HStack>
        <Text fontWeight="bold" color="blue">
          Created
        </Text>
        <View bg="gray.400" ml={2} px={2} rounded="full">
          <Text color="gray.100" fontWeight="bold">
            {tasks.length}
          </Text>
        </View>
      </HStack>
      <HStack>
        <Text fontWeight="bold" color="purple">
          Closed
        </Text>
        <View bg="gray.400" ml={2} px={2} rounded="full">
          <Text color="gray.100" fontWeight="bold">
            {tasksClosed}
          </Text>
        </View>
      </HStack>
    </HStack>
  );
};

export default Info;
