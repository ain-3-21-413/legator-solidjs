import { HStack, Heading, VStack } from "@hope-ui/solid";
import ActionCard from "../../patrons/patronPageIntro/ActionCard";
import { useContext } from "solid-js";
import { CurrentBookContext } from "../../../providers/CurrentBook";
import useOpen from "../../../hooks/useOpen";

export default function ItemPageIntro() {

    const { setBookSelected, createNewBook } = useContext(CurrentBookContext);
    const { open, openPatronTab } = useOpen();
    
    return (
        <VStack w={"$full"} h={"calc(100vh - 32px - 40px - 0.75rem * 5)"} overflowY={"auto"} backgroundColor={"white"} p={"$3"} gap={"$3"}>
            <Heading size={"2xl"}>
                Manage your books
            </Heading>
            <Heading size={"lg"} fontWeight={"$normal"}>
                What would you like to do?
            </Heading>
            <HStack w={"$full"} gap={"$6"} justifyContent={"center"}>
                <ActionCard title="Add books" onClick={() => {open("/items"); openPatronTab("0"); setBookSelected(true); createNewBook()}}/>
                <ActionCard title="Search for books"/>
                <ActionCard title="View recently added" onClick={() => {}}/>
                <ActionCard title="View recently modified" onClick={() => {}}/>
            </HStack>
            {/* <PatronSearchModal isOpen={isOpen} onClose={onClose}/> */}
        </VStack>
    )
}