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
	Flex,
	TableCaption
} from "@chakra-ui/react"

import UpdateContent from "./UpdateTodo"
import ModelToDo from "./Createtodo"
import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { FcApproval, FcCancel } from "react-icons/fc";

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
				<TableCaption>Update TODO click on it!</TableCaption>
				<Thead variant="simple" border="2px">
					<Tr>
						<Th color="dark" fontWeight="extrabold" >TODO</Th>
						<Th color="dark" fontWeight="extrabold" >IS DONE?</Th>
					</Tr>
				</Thead>
				<Tbody >
					{
						// here we need unique key for every row
						apiData.map((item) => {
							var randomId = Math.round(Math.random() * 900);
						return (
							<Tr key={randomId + 2} fontSize="1.3rem" variant="simple" border="2px">
								<Td><UpdateContent item={item.Content}>Update Todo</UpdateContent></Td>
								<Td key={randomId + 3}>{item.isdone ? <FcApproval /> : <FcCancel />}</Td>
							</Tr>
						)
					})}

				</Tbody>
			</Table>

			<Flex mt="350px" mr="800px">
				<Button margin="0.6rem" onClick={() => history.push("/Update")} >Update your account</Button>
				<Button margin="0.6rem" onClick={() => history.push("/Login")} >Logout</Button>
				<ModelToDo></ModelToDo>
			</Flex>
		</Box>
	)
}