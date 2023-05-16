import { Button, HStack, VStack } from "@hope-ui/solid";
import { useContext } from "solid-js";
import { CurrentPageContext } from "../../providers/CurrentPageProvider";
import useOpen from "../../hooks/useOpen";
import { Outlet } from "@solidjs/router";

export default function ItemCard() {

    const [state] = useContext(CurrentPageContext);

    const { openItemTab } = useOpen();

    return (
        <VStack w={"$full"} h={"$full"} gap={"$3"}>
            <VStack w={"$full"} backgroundColor={"white"}>
                <HStack justifyContent={"start"} w={"$full"}>
                    <Button
                        onClick={() => openItemTab("0")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "0" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "0" ? "$accent11" : "transparent"}
                    >
                        0
                    </Button>
                    <Button
                        onClick={() => openItemTab("1")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "1" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "1" ? "$accent11" : "transparent"}
                    >
                        1
                    </Button>
                    <Button
                        onClick={() => openItemTab("2")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "2" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "2" ? "$accent11" : "transparent"}
                    >
                        2
                    </Button>
                    <Button
                        onClick={() => openItemTab("3")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "3" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "3" ? "$accent11" : "transparent"}
                    >
                        3
                    </Button>
                    <Button
                        onClick={() => openItemTab("4")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "4" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "4" ? "$accent11" : "transparent"}
                    >
                        4
                    </Button>
                    <Button
                        onClick={() => openItemTab("5")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "5" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "5" ? "$accent11" : "transparent"}
                    >
                        5
                    </Button>
                    <Button
                        onClick={() => openItemTab("6")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "6" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "6" ? "$accent11" : "transparent"}
                    >
                        6
                    </Button>
                    <Button
                        onClick={() => openItemTab("7")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "7" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "7" ? "$accent11" : "transparent"}
                    >
                        7
                    </Button>
                    <Button
                        onClick={() => openItemTab("8")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "8" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "8" ? "$accent11" : "transparent"}
                    >
                        8
                    </Button>
                    <Button
                        onClick={() => openItemTab("9")} 
                        px={"$8"} py={"$2"} _hover={{backgroundColor: "$accent11", color: "white"}} 
                        borderRadius={"0"} 
                        color={state.currentItemTab == "9" ? "white" : "$blackAlpha11"} 
                        backgroundColor={state.currentItemTab == "9" ? "$accent11" : "transparent"}
                    >
                        9
                    </Button>
                </HStack>
            </VStack>
            <VStack w={"$full"} h={"767px"} backgroundColor={"white"} overflow={"auto"}>
                <Outlet />
            </VStack>
        </VStack>
    )
}