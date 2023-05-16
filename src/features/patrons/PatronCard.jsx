import { Button, HStack, VStack } from "@hope-ui/solid";
import { useContext } from "solid-js";
import { CurrentPatronContext } from "../../providers/CurrentPatron";
import GeneralInfo from "./patronCard/GeneralInfo";
import Personal from "./tabs/Personal";

export default function PatronCard(props) {

    const [state] = useContext(CurrentPatronContext);
    
    return (
        <VStack w={"$full"} h={"$full"} gap={"$3"}>
            <GeneralInfo />
            <VStack w={"$full"} backgroundColor={"white"} flexGrow={"1"}>
                <HStack justifyContent={"start"} w={"$full"}>
                    <Button px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} borderRadius={"0"} backgroundColor={"transparent"} color={"$blackAlpha11"} >
                        Personal
                    </Button>
                    <Button px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} borderRadius={"0"} backgroundColor={"transparent"} color={"$blackAlpha11"} >
                        Contact
                    </Button>
                    <Button px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} borderRadius={"0"} backgroundColor={"transparent"} color={"$blackAlpha11"} >
                        Access
                    </Button>
                    <Button px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} borderRadius={"0"} backgroundColor={"transparent"} color={"$blackAlpha11"} >
                        Notes
                    </Button>
                    <Button px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} borderRadius={"0"} backgroundColor={"transparent"} color={"$blackAlpha11"} >
                        Statistics
                    </Button>
                </HStack>
                <Personal />
            </VStack>
        </VStack>
    )
}