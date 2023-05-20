import { HStack, IconButton, Input, SimpleOption, SimpleSelect, Text, VStack } from "@hope-ui/solid";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "solid-icons/ai";
import SearchResult from "./SearchResult";
import { Show, onMount, useContext } from "solid-js";
import { PatronEditingContext } from "../../providers/PatronEditingProvider";
import { ModalContext } from "../../providers/ModalProvider";
import PatronSearchModal from "./patronSearch/PatronSearchModal";
import { CurrentPatronContext } from "../../providers/CurrentPatron";

const data = {
    results: [
        // {
        //     date: "01/01/2023",
        //     name: "Amir Asanov",
        // },
    ]
}

export default function Sidebar() {

    const [state, { setASC }] = useContext(PatronEditingContext);
    const [currentPatronState] = useContext(CurrentPatronContext);
    const [{ isOpen, onOpen, onClose }] = useContext(ModalContext);

    return (
        <VStack w="300px" h="$full" gap={"$3"}>
            <HStack w={"$full"}>
                <SimpleSelect backgroundColor={"white"} defaultValue={"name"} fontSize={"14px"} flexBasis={"40%"} borderTopRightRadius={"0"} borderBottomRightRadius={"0"}>
                    <SimpleOption value={"name"}>
                        Name
                    </SimpleOption>
                    <SimpleOption value={"number"}>
                        Number
                    </SimpleOption>
                </SimpleSelect>
                <Input backgroundColor={"white"} fontSize={"14px"} flexBasis={"60%"} borderTopLeftRadius={"0"} borderBottomLeftRadius={"0"} />
            </HStack>
            <Text color={"$accent11"} alignSelf={"end"} cursor={"pointer"} onClick={() => {onOpen()}}>
                Advanced search
            </Text>
            <PatronSearchModal isOpen={isOpen} onClose={onClose}/>
            <VStack w={"$full"} flexGrow={"1"}>
                <HStack w={"$full"} backgroundColor={"$accent11"}>
                    <SimpleSelect defaultValue={"modifiedDate"} border={"0"} color={"white"} borderRadius={"0"}>
                        <SimpleOption value="modifiedDate">
                            Modified Date
                        </SimpleOption>
                    </SimpleSelect>
                    <IconButton borderRadius={"0"} onClick={() => setASC(!state.isASC)} background={"none"} _hover={{background: "none"}}>
                        { state.isASC ? <AiOutlineSortAscending /> : <AiOutlineSortDescending /> }
                    </IconButton>
                </HStack>
                <VStack 
                    w={"$full"} 
                    flexGrow={"1"} 
                    backgroundColor={"white"} 
                    overflow={"auto"} 
                    h="calc(100vh - 32px - 40px - 40px - 21px - 40px - 0.75rem * 8)"
                >
                <Show when={currentPatronState.patrons.length == 0}>
                    <Text w={"$full"} p={"$3"} color={"$blackAlpha10"}>
                        No results.
                    </Text>
                </Show>
                <For each={currentPatronState.patrons}>{(patron) =>
                    <SearchResult patron={patron} />
                }</For>
                </VStack>
            </VStack>
        </VStack>
    )
}