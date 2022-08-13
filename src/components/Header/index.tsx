import { Center, Image } from "native-base";
import logo from "../../assets/logo/Logo.png";

const Header = () => {
  return (
    <Center height={175} bg="gray.700">
      <Image source={logo} alt="logo" />
    </Center>
  );
};

export default Header;
