import * as React from "react"
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Text,
	Box
} from "@chakra-ui/react"
import { useHistory } from 'react-router-dom'

export default function CreateNewAccount() {
	var password
	var userName
	let history = useHistory();
	return (

		<Box w="100%"
			h="1000px"
			bgGradient={[
				"linear(to-tr, yellow.300,blue.400)",
				"linear(to-t, blue.200, teal.500)",
				"linear(to-b, green.100, blue.300)",
			]}>

		<Flex direction="column">
			<Text fontSize="4xl">Create New Account</Text>
			<Flex my="2rem">
			<FormControl id="username">
				<FormLabel>Username</FormLabel>
					<Input type="username" onChange={(event) => userName = event.target.value} />
				<FormLabel>password</FormLabel>
					<Input type="password" onChange={(event) => password = event.target.value} />
				</FormControl>
			</Flex>
			<Button onClick={() => Create(userName, password, history)}>Create</Button>
			</Flex>
		</Box>
	)
}

function Create(username, password, history) {
	console.log("Creazione account->>", username, password)

	history.pushState("/Home")
	var randomId = Math.round(Math.random() * 900);
	// Simple POST request with a JSON body using fetch
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			id: randomId,
			username: username,
			password: password
		})
	};
	fetch('http://localhost:5000/newAccount', requestOptions)
		.then(response => response.json())
}