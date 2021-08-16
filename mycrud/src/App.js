import './App.css';

import { Flex, FormLabel, FormControl, Input, Button } from "@chakra-ui/react"
//import Check from './check';
//import ShowAllUser from "./ShowAllUser"
import ShowAllUserv2 from "./ShowAllUserv2"
import React, { useEffect, useState } from "react"
import { Switch, Route, useHistory } from 'react-router-dom'
import Home from "./HomePage"
import CreateNewAccount from './CreateNewAccount';
import Update from './Update';

// Routing of the application
// TODO protect home page if no login, 2 default path "/"
function App() {
  return (
    <Switch>
      <Route exact path="/Home" component={Home} />
      <Route path="/Login" component={Login} />
      <Route path="/Create" component={CreateNewAccount} />
      <Route path="/Update" component={Update} />
    </Switch>)
}

function Login() {

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

  const CreateDefaultUrl = "/Create"
  var password = ""
  var userName = ""
  let history = useHistory();
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
      <Button onClick={() => handleClick(history, userName, password, apiData)}>Submit</Button>
      <Button onClick={() => CreateNew(history, CreateDefaultUrl)}> Create an account</Button>
    </Flex>
  );
}

// if the login is correct, redirect to HomePage otherwise stay in Login Page
function handleClick(history, userName, password, apiData) {
  // history can redirect or to "/Homepage" or stay in Login page
  history.push(ShowAllUserv2(userName, password, apiData));
}

function CreateNew(history, CreateDefaultUrl) {
  history.push(CreateDefaultUrl);
}

export default App;
