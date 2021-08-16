import * as React from "react"
import {
	Button,
	Flex,
	FormControl,
	FormLabel,
	Input,
	Text
} from "@chakra-ui/react"


export default function CreateNewAccount() {
	var password
	var userName

	return (
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
			<Button onClick={() => Create(userName, password)}>Create</Button>
		</Flex>
	)
}

function Create(username, password) {
	console.log("Creazione account->>", username, password)

	var randomId = Math.round(Math.random() * 800);
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