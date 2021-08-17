import { Flex, FormLabel, FormControl, Input, Button, Box } from "@chakra-ui/react"
import ShowAllUserv2 from "./ShowAllUserv2"
import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'

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

		<Box w="100%"
			h="1000px"
			bgGradient={[
				"linear(to-tr, yellow.300,blue.400)",
				"linear(to-t, blue.200, teal.500)",
				"linear(to-b, green.100, blue.300)",
			]}>

			<Flex direction="column" alignItems="center" justify-content="center" >
				<FormControl color="black" id="userName">
					<FormLabel color="black" >Email address</FormLabel>
					<Input color="black" type="username" id="user" onChange={(event) => userName = event.target.value} />
				</FormControl>
				<FormControl id="password">
					<FormLabel color="black">password</FormLabel>
					<Input color="black" type="password" id="psw" onChange={(event) => password = event.target.value} />
				</FormControl>
				<Button onClick={() => handleClick(history, userName, password, apiData)}>Submit</Button>
				<Button onClick={() => CreateNew(history, CreateDefaultUrl)}> Create an account</Button>
			</Flex>
		</Box>
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


export default Login;