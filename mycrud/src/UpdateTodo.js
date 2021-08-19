import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Input,
	FormControl,
	FormLabel,
	useDisclosure,
	Text,
	Button
} from "@chakra-ui/react"

import React from "react"

function UpdateContent(item) {

	const { isOpen, onOpen, onClose } = useDisclosure()

	const initialRef = React.useRef()
	const finalRef = React.useRef()
	var Content = ""
	return (
		<>
			<Text onClick={onOpen}>
				{item.item}
				<Modal
					initialFocusRef={initialRef}
					finalFocusRef={finalRef}
					isOpen={isOpen}
					onClose={onClose}
				>
					<ModalOverlay />
					<ModalContent>
						<ModalHeader>Update TODO</ModalHeader>
						<ModalCloseButton />
						<ModalBody pb={6}>
							<FormControl>
								<FormLabel>Content</FormLabel>
								<Input ref={initialRef} placeholder="ToDo" onChange={(event) => Content = event.target.value} />
							</FormControl>
						</ModalBody>

						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={() => Update(item, Content)}>
								Save
							</Button>
							<Button onClick={onClose}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Text>
		</>
	)
	/*

*/
}

function Update(item, Content) {
	console.log("necon", Content)
	console.log("id", item.item)
	const TodoInfo = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			oldContent: item.item,
			Content: Content,
		})
	};
	fetch('http://localhost:5000/updatetodo', TodoInfo)
		.then(response => response.json())
}

export default UpdateContent