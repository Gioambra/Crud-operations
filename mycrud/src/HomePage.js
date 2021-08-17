import {
	Button,
	Text,
	Box,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
} from "@chakra-ui/react"

import { useHistory } from 'react-router-dom'

export default function HomePage() {
	console.log("username from homepage->>")
	let history = useHistory();
	return (

		<Box w="100%"
			h="1000px"
			bgGradient={[
				"linear(to-tr, yellow.300,blue.400)",
				"linear(to-t, blue.200, teal.500)",
				"linear(to-b, green.100, blue.300)",
			]}>


			<Text
				position="center"
				bgGradient="linear(to-l, #7928CA,#AC0080)"
				bgClip="text"
				fontSize="6xl"
				fontWeight="extrabold"
			>
				Welcome to the HomePage!
			</Text>

			<div>TODO TABLE</div>
			<Table variant="simple" border="4px">
				<Thead>
					<Tr>
						<Th>1</Th>
						<Th>2</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>1a</Td>
						<Td>2a</Td>
					</Tr>
					<Tr>
						<Td>1b</Td>
						<Td>2b</Td>
					</Tr>
					<Tr>
						<Td>1c</Td>
						<Td>2c</Td>
					</Tr>
				</Tbody>
			</Table>

			<Button mt="600px" mr="800px" onClick={() => history.push("/Update")} >Update your account</Button>
			<Button mt="600px" mr="800px" posonClick={() => history.push("/Login")} >Logout</Button>
			<Text> you are now logged with</Text>
		</Box>
	)
}