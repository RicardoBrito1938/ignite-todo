import { Center, Divider, Image, Text, VStack } from "native-base";
import clipboard from "../../assets/doc/Clipboard.png";

const NoTasks = () => (
  <Center>
    <Divider my={2} bg="gray.300" />
    <Image mt={12} mb={4} source={clipboard} alt="clipboard" />

    <Text color="gray.300" fontWeight="bold">
      You have no tasks
    </Text>

    <Text color="gray.300">Create and organize your tasks</Text>
  </Center>
);

export default NoTasks;
