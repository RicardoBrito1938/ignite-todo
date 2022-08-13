import { Input as NativeBaseInput, IInputProps } from "native-base";

const Input = ({ ...rest }: IInputProps) => {
  return (
    <NativeBaseInput
      bg="gray.500"
      h={54}
      size="md"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.100"
      _focus={{
        borderWidth: 1,
        borderColor: "purpleDark",
        bg: "gray.500"
      }}
      {...rest}
    />
  );
};

export default Input;
