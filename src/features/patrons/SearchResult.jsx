import { Text, VStack } from "@hope-ui/solid";
import { useContext } from "solid-js";
import { CurrentPatronContext } from "../../providers/CurrentPatron";

export default function SearchResult(props) {

    const [state, { selectPatron }] = useContext(CurrentPatronContext);

    const isSelected = () => {
        for (let prop in state.currentPatron) {
            if (state.currentPatron.hasOwnProperty(prop)) {
                if (state.currentPatron[prop] !== props.patron[prop]) {
                    return false;
                }
            }
        } 
        return true;
    }

    return (
        <VStack backgroundColor={isSelected() ? "$blackAlpha5" : "transparent"} w="$full" alignItems={"start"} p="$3" _hover={{backgroundColor: "$blackAlpha5"}} onClick={() => selectPatron(props.patron)}>
            <Text fontSize={"12px"}>
                {props.patron.firstName}
            </Text>
            <Text>
                {props.patron.lastName}
            </Text>
        </VStack>
    )
}