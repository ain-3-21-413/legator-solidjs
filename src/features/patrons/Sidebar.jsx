import { HStack, IconButton, Input, SimpleOption, SimpleSelect, VStack } from "@hope-ui/solid";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "solid-icons/ai";
import SearchResult from "./SearchResult";
import { useContext } from "solid-js";
import { PatronEditingContext } from "../../providers/PatronEditingProvider";

const data = {
    results: [
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
    ]
}

export default function Sidebar() {

    const [state, { setASC }] = useContext(PatronEditingContext);

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
                    h="calc(100vh - 32px - 40px - 40px - 40px - 0.75rem - 0.75rem - 0.75rem - 0.75rem)" // main header of the page - header of the page - searchbar - sortbar | gaps
                >
                <For each={data.results}>{(result) =>
                    <SearchResult result={result} />
                }</For>
                </VStack>
            </VStack>
        </VStack>
    )
}