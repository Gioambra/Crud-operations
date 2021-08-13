import './App.css';

import { Flex, FormLabel, FormControl, Input, Button } from "@chakra-ui/react"
//import Check from './check';
//import ShowAllUser from "./ShowAllUser"
import ShowAllUserv2 from "./ShowAllUserv2"
import React, { useEffect, useState } from "react"
/*
  Create 2 varibales passowrd and username, on click on button Submit these variables will be send
  to Check component
*/
function App() {

  // Here we call API
  useEffect(() => {

    const getApi = () => {
      fetch('http://localhost:5000')
        .then(response => response.json())
        .then((data) => {
          console.log(data)
          setApiData(data);
        });
    }

    getApi()
  }, []);

  const [apiData, setApiData] = useState([]);
  console.log("APIDATA->", apiData)



  var password
  var userName
  return (

    <Flex direction="column" >
      <FormControl id="userName">
        <FormLabel>Email address</FormLabel>
        <Input type="username" id="user" onChange={(event) => userName = event.target.value} />
      </FormControl>
      <FormControl id="password">
        <FormLabel>password</FormLabel>
        <Input type="password" id="psw" onChange={(event) => password = event.target.value} />
      </FormControl>
      <Button onClick={() => ShowAllUserv2(userName, password, apiData)}>Submit</Button>


    </Flex>
  );
}

export default App;
