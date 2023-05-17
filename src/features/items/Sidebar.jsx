import { HStack, IconButton, Input, SimpleOption, SimpleSelect, VStack } from "@hope-ui/solid";
import { AiOutlineSortAscending, AiOutlineSortDescending } from "solid-icons/ai";
import { For, useContext } from "solid-js";
import { ItemEditingContext } from "../../providers/ItemEditingProvider";
import SearchResult from "./SearchResult";

const data = {
    results: [
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
        {
            date: "01/01/2016", 
            title: "Clean Code", 
        }, 
    ]
}

export default function Sidebar() {

    const [state, { setASC }] = useContext(ItemEditingContext);

    return (
        <VStack w="300px" h="$full" gap={"$3"}>
            <HStack w={"$full"}>
                <SimpleSelect backgroundColor={"white"} defaultValue={"title"} fontSize={"14px"} flexBasis={"40%"} borderTopRightRadius={"0"} borderBottomRightRadius={"0"}>
                    <SimpleOption value={"title"}>
                        Title
                    </SimpleOption>
                    <SimpleOption value={"author"}>
                        Author
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
                    h="calc(100vh - 32px - 40px * 3 - 0.75rem * 4)"
                >
                <For each={data.results}>{(result) =>
                    <SearchResult result={result} />
                }</For>
                </VStack>
            </VStack>
        </VStack>
    )
}