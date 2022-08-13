import { Center, Image, VStack } from "native-base";
import logo from "../../assets/logo/Logo.png";

const Home = () => {
  return (
    <VStack flex={1} bg="background">
      <Center height={175} bg="gray.700">
        <Image source={logo} alt="logo" />
      </Center>
    </VStack>
  );
};

export default Home;
