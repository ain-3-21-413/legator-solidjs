import { 
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    createDisclosure,
  } from "@hope-ui/solid"
import { useContext } from "solid-js"
import { SubFieldModalContext } from "../../../providers/SubFieldModalProvider"

export default function SubFieldModal() {
    const { isOpen, onOpen, onClose } = useContext(SubFieldModalContext)
  
    return (
        <Modal opened={isOpen()} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalHeader>
                
            </ModalHeader>
            <ModalBody>
              <p>Some contents...</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
  }