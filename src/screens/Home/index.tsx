import { HStack, IconButton, useTheme, VStack } from "native-base";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
  const { colors } = useTheme();

  return (
    <VStack flex={1} bg="background">
      <Header />
      <VStack px={6}>
        <HStack mt={-27}>
          <Input
            placeholder="Add a new task"
            onChangeText={() => {}}
            flex={1}
          />
          <IconButton
            ml={1}
            w={52}
            bg="blueDark"
            icon={
              <AntDesign
                name="pluscircleo"
                size={16}
                color={colors.gray[100]}
                onPress={() => {}}
              />
            }
          />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Home;
