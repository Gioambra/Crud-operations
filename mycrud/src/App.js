import './App.css';
import { Flex, FormLabel, FormControl, Input } from "@chakra-ui/react"

function App() {
  // TODO send passwor dand email to check.js
  return (
    <Flex direction="column">
      <FormControl id="userName">
        <FormLabel>Email address</FormLabel>
        <Input type="username" />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Email address</FormLabel>
        <Input type="password" />
      </FormControl>
    </Flex>
  );
}

export default App;
