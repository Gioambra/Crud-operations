import {
	Button,
	Text
} from "@chakra-ui/react"

import { useHistory } from 'react-router-dom'

export default function HomePage() {
	console.log("username from homepage->>")
	let history = useHistory();
	return (
		<div>HomePage
			<Button onClick={() => history.push("/Update")} >Update your account</Button>
			<Text> you are now logged with</Text>
		</div>
	)
}