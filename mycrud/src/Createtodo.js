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
  Button,
  useDisclosure
} from "@chakra-ui/react"

import React from "react"

export default function ModelToDo() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef()
  const finalRef = React.useRef()
  var Content = ""
  return (
    <>
      <Button margin="0.6rem" onClick={onOpen}>Open Modal</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add TODO</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <Input ref={initialRef} placeholder="ToDo" onChange={(event) => Content = event.target.value} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => CreateToDo(Content)}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function CreateToDo(Content) {
  // add a control 

  var randomId = Math.round(Math.random() * 900);
  var randomeit2 = Math.round(Math.random() * 500);

  const TodoInfo = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ownerID: randomId,
      Content: Content,
      TodoID: randomeit2,
      isdone: false
    })
  };
  fetch('http://localhost:5000/newTodo', TodoInfo)
    .then(response => response.json())
}