import { Text, VStack } from "@hope-ui/solid";
import { useContext } from "solid-js";
import { CurrentPatronContext } from "../../providers/CurrentPatron";

export default function SearchResult(props) {

    const [state, { selectPatron }] = useContext(CurrentPatronContext);

    return (
        <VStack w="$full" alignItems={"start"} p="$3" _hover={{backgroundColor: "$blackAlpha5"}} onClick={() => selectPatron(props.patron)}>
            <Text fontSize={"12px"}>
                {props.patron.firstName}
            </Text>
            <Text>
                {props.patron.lastName}
            </Text>
        </VStack>
    )
}