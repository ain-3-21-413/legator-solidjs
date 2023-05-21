import { Button, HStack, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, createDisclosure } from "@hope-ui/solid";
import ActionCard from "./ActionCard";
import { useContext } from "solid-js";
import { PatronEditingContext } from "../../../providers/PatronEditingProvider";
import useOpen from "../../../hooks/useOpen";
import PatronSearchModal from "../patronSearch/PatronSearchModal";
import { ModalContext } from "../../../providers/ModalProvider";

export default function PatronPageIntro() {

    const [state, {setPatronSelected, setEditing}] = useContext(PatronEditingContext);
    const { open, openPatronTab } = useOpen();

    const [{ isOpen, onOpen, onClose }] = useContext(ModalContext);

    return (
        <VStack w={"$full"} h={"calc(100vh - 32px - 40px - 0.75rem * 5)"} overflowY={"auto"} backgroundColor={"white"} p={"$3"} gap={"$3"}>
            <Heading size={"2xl"}>
                Manage your patrons
            </Heading>
            <Heading size={"lg"} fontWeight={"$normal"}>
                What would you like to do?
            </Heading>
            <HStack w={"$full"} gap={"$6"} justifyContent={"center"}>
                <ActionCard title="Add patrons" onClick={() => {open("/patrons"); openPatronTab("personal"); setPatronSelected(true); setEditing(true)}}/>
                <ActionCard title="Search for patrons" onClick={() => {onOpen()}}/>
                <ActionCard title="View recently added" onClick={() => {}}/>
                <ActionCard title="View recently modified" onClick={() => {}}/>
            </HStack>
            <PatronSearchModal isOpen={isOpen} onClose={onClose}/>
        </VStack>
    )
}