import {
	Button,
	Text,
	Box
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

			<Button mt="600px" mr="800px" onClick={() => history.push("/Update")} >Update your account</Button>
			<Button mt="600px" mr="800px" posonClick={() => history.push("/Login")} >Logout</Button>
			<Text> you are now logged with</Text>
		</Box>
	)
}