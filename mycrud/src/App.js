import './App.css';

import { Flex, FormLabel, FormControl, Input, Button } from "@chakra-ui/react"
import Check from './check';
import ShowAllUser from "./ShowAllUser"

/*
  Create 2 varibales passowrd and username, on click on button Submit these variables will be send
  to Check component
*/
function App() {
  var password
  var userName
  return (
    <Flex direction="column">
      <FormControl id="userName">
        <FormLabel>Email address</FormLabel>
        <Input type="username" id="user" onChange={(event) => userName = event.target.value} />
      </FormControl>
      <FormControl id="password">
        <FormLabel>password</FormLabel>
        <Input type="password" id="psw" onChange={(event) => password = event.target.value} />
      </FormControl>
      <Button onClick={() => Check(userName, password)}>Submit</Button>

      <ShowAllUser></ShowAllUser>
    </Flex>
  );
}



export default App;
