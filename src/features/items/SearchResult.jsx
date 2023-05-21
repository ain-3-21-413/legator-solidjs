import { Text, VStack } from "@hope-ui/solid";
import { useContext } from "solid-js";
import { CurrentBookContext } from "../../providers/CurrentBook";

export default function SearchResult(props) {

    const { selectBook, currentBook } = useContext(CurrentBookContext);

    return (
        <VStack backgroundColor={currentBook["fields"]["010-a"] == props.book["fields"]["010-a"] ? "$blackAlpha5" : "transparent"} onClick={() => selectBook(props.book)} w="$full" alignItems={"start"} p="$3" _hover={{backgroundColor: "$blackAlpha5"}}>
            <Text fontSize={"12px"}>
                {/* {props.book.date} */}
            </Text>
            <Text>
                {props.book["fields"]["245-a"]}
            </Text>
        </VStack>
    )
}