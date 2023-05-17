import { Button, HStack, VStack } from "@hope-ui/solid";
import { useContext } from "solid-js";
import GeneralInfo from "./patronCard/GeneralInfo";
import { Outlet } from "@solidjs/router";
import useOpen from "../../hooks/useOpen";
import { CurrentPageContext } from "../../providers/CurrentPageProvider";

export default function PatronCard(props) {

    const [state] = useContext(CurrentPageContext);

    const { openPatronTab } = useOpen();
    
    return (
        <VStack w={"$full"} h={"$full"} gap={"$3"}>
            <GeneralInfo />
            <VStack 
                w={"$full"} 
                backgroundColor={"white"} 
                flexGrow={"1"}
                h={"calc(100vh - 32px - 40px * 3 - 224px - 0.75rem * 3)"}
                overflowY={"auto"}
            >
                <HStack justifyContent={"start"} w={"$full"}>
                    <Button
                        onClick={() => openPatronTab("personal")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentPatronTab == "personal" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentPatronTab == "personal" ? "$accent11" : "transparent"}
                    >
                        Personal
                    </Button>
                    <Button
                        onClick={() => openPatronTab("contact")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentPatronTab == "contact" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentPatronTab == "contact" ? "$accent11" : "transparent"}
                    >
                        Contact
                    </Button>
                    <Button
                        onClick={() => openPatronTab("access")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentPatronTab == "access" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentPatronTab == "access" ? "$accent11" : "transparent"}
                    >
                        Access
                    </Button>
                    <Button
                        onClick={() => openPatronTab("notes")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentPatronTab == "notes" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentPatronTab == "notes" ? "$accent11" : "transparent"}
                    >
                        Notes
                    </Button>
                    <Button
                        onClick={() => openPatronTab("statistics")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentPatronTab == "statistics" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentPatronTab == "statistics" ? "$accent11" : "transparent"}
                    >
                        Statistics
                    </Button>
                </HStack>
                <Outlet />
            </VStack>
        </VStack>
    )
}