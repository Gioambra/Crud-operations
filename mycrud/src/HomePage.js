import {
	Button,
	Text,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	Flex,
	TableCaption,
} from "@chakra-ui/react"

import UpdateContent from "./UpdateTodo"
import ModelToDo from "./Createtodo"
import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { FcApproval, FcCancel } from "react-icons/fc";
import UpdateDone from "./UpdateDone"

export default function HomePage() {
	const [isdone, SetDone] = useState([]);
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



		<Flex direction="column">
			<Text
				textAlign={['right', 'center']}
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
						// unique function that handle isdonecolumn?
						apiData.map((item) => {
							var randomId = Math.round(Math.random() * 900);
						return (
							<Tr key={randomId + 2} fontSize="1.3rem" variant="simple" border="2px">
								<Td><UpdateContent item={item.Content}>Update Todo</UpdateContent></Td>
								<Td key={randomId + 3} >{item.isdone ? <FcApproval onClick={() => UpdateDone(item, true)} /> : <FcCancel onClick={() => UpdateDone(item, false)} />}</Td>
							</Tr>
						)
					})}

				</Tbody>
			</Table>

			<Flex mt="200px" mr="800px">
				<Button margin="0.6rem" onClick={() => history.push("/Update")} >Update your account</Button>
				<Button margin="0.6rem" >Logout</Button>
				<ModelToDo></ModelToDo>
			</Flex>
		</Flex>
	)
}