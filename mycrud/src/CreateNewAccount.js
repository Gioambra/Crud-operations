import * as React from "react"
import {
	Flex,
	FormControl,
	FormLabel,
	Input,
	Text
} from "@chakra-ui/react"
export default function CreateNewAccount() {
	console.log("hero we go")
	return (
		<Flex>
			<Text fontSize="4xl">Create New Account</Text>
			<FormControl id="username">
				<FormLabel>Username</FormLabel>
				<Input type="username" />
				<FormLabel>password</FormLabel>
				<Input type="password" />
			</FormControl>
		</Flex>
	)
}