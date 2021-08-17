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

import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'

export default function HomePage() {

	// Here we call API
	useEffect(() => {

		const getApi = () => {
			fetch('http://localhost:5000/todo')
				.then(response => response.json())
				.then((data) => {
					console.log(data)
					setApiData(data);
				});
		}

		getApi()
	}, []);

	const [apiData, setApiData] = useState([]);
	console.log("TODO->>", apiData)

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
				bgGradient="linear(to-l, black, blue)"
				bgClip="text"
				fontSize="6xl"
				fontWeight="extrabold"
			>
				Welcome to the HomePage!
			</Text>

			<Text fontWeight="bold" position="center" >TODO TABLE</Text>
			<Table border="4px">
				<Thead variant="simple" border="2px">
					<Tr>
						<Th color="dark" fontWeight="extrabold" >TODO</Th>
						<Th color="dark" fontWeight="extrabold" >IS DONE?</Th>
					</Tr>
				</Thead>
				<Tbody >

					{apiData.map((item) => {
						return (
							<Tr fontSize="1.3rem" variant="simple" border="2px">
								<Td>{item.Content}</Td>
								<Td>{item.isDone}</Td>
							</Tr>
						)
					})}

				</Tbody>
			</Table>

			<Button mt="600px" mr="800px" onClick={() => history.push("/Update")} >Update your account</Button>
			<Button mt="600px" mr="800px" onClick={() => history.push("/Login")} >Logout</Button>
			<Text> you are now logged with</Text>
		</Box>
	)
}