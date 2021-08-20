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
import { useCookies } from "react-cookie";
import { v4 as uuidv4 } from 'uuid';
import UpdateContent from "./UpdateTodo"
import ModelToDo from "./Createtodo"
import React, { useEffect, useState } from "react"
import { useHistory } from 'react-router-dom'
import { FcApproval, FcCancel } from "react-icons/fc";
import UpdateDone from "./UpdateDone"
import FetchAllUser from "./fetchData/AllUsers"

export default function HomePage(sessionToken) {
	const [cookies, setCookie, removeCookie] = useCookies(["user"]);
	let history = useHistory();

	function CheckCookie(cookies, history) {
		var users = FetchAllUser();
		users.forEach(user => {
			if (cookies.user === user.username) {
				if (cookies.password === user.password) {
					console.log("credentials cookie are ok")
				}
			}
			console.log("noT auth")
			history.push("/Login")
		});
	}

	CheckCookie(cookies, history)
	const [change, setChanges] = useState([]);
	const [apiData, setApiData] = useState([]);
	// Here we call API
	useEffect(() => {
		console.log("effect")
		const getApi = () => {
			fetch('http://localhost:5000/todo')
				.then(response => response.json())
				.then((data) => {
					console.log(data)
					setApiData(data);
				});
		}
		getApi()
	}, [change]);

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
				Welcome to the HomePage! {cookies.user}
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
						apiData.map((item, counter) => {
						return (
							<Tr key={uuidv4()} fontSize="1.3rem" variant="simple" border="2px">
								<Td><UpdateContent item={item.Content}>Update Todo</UpdateContent></Td>
								<Td key={uuidv4()} >{item.isdone ? <FcApproval onClick={() => setChanges(UpdateDone(item, true))} /> : <FcCancel onClick={() => setChanges(UpdateDone(item, false))} />}</Td>
							</Tr>
						)
					})}

				</Tbody>
			</Table>

			<Flex mt="200px" mr="800px">
				<Button margin="0.6rem" onClick={() => history.push("/Update")} >Update your account</Button>
				<Button margin="0.6rem" onClick={() => Logout(history, removeCookie)} >Logout</Button>
				<Button margin="0.6rem" onClick={(randomId) => setChanges(randomId)}>REFETCH</Button>
				<ModelToDo></ModelToDo>
			</Flex>
		</Flex>
	)
}


function Logout(history, removeCookie) {
	removeCookie("user")
	removeCookie("authToken")
	removeCookie("password")
	history.push("/Login")
}