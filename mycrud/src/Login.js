import { Flex, FormLabel, FormControl, Input, Button, Text } from "@chakra-ui/react"
import ShowAllUserv2 from "./ShowAllUserv2"
import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from 'uuid';
function Login() {
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);


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
		<Flex mt="320px" grow="100%" direction="column">
			<Text
				textAlign={['right', 'center']}
				position="center"
				bgGradient="linear(to-l, black, blue)"
				bgClip="text"
				fontSize="6xl"
				fontWeight="extrabold"
			>
				Welcome to TODO tracking APP!
			</Text>
				<FormControl color="black" id="userName">
					<FormLabel color="black" >Email address</FormLabel>
				<Input variant="filled" color="black" type="username" id="user" onChange={(event) => userName = event.target.value} />
				</FormControl>
				<FormControl id="password">
					<FormLabel color="black">password</FormLabel>
				<Input variant="filled" color="black" type="password" id="psw" onChange={(event) => password = event.target.value} />
				</FormControl>
			<Button mt="50px" colorScheme="blue" onClick={() => handleClick(history, userName, password, apiData, setCookie)}>Submit</Button>
			<Button colorScheme="blue" onClick={() => CreateNew(history, CreateDefaultUrl)}> Create an account</Button>
		</Flex>
	);
}

// if the login is correct, redirect to HomePage otherwise stay in Login Page
function handleClick(history, userName, password, apiData, setCookie) {

	if (ShowAllUserv2(userName, password, apiData) === "/Home") {

		console.log("here we are man")
		setCookie("user", userName, { path: '/' });
		setCookie("password", password, { path: '/' });
		setCookie("authToken", uuidv4(), { path: '/' })

		// TODO create a function that check in every page if auth information are correct
	}
	// history can redirect or to "/Homepage" or stay in Login page
	history.push(ShowAllUserv2(userName, password, apiData));
}

function CreateNew(history, CreateDefaultUrl) {
	history.push(CreateDefaultUrl);
}

export default Login;