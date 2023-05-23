import { Button, Heading, Stack, VStack } from "@hope-ui/solid";
import useOpen from "../hooks/useOpen";
import { useContext } from "solid-js";
import { CurrentPageContext } from "../providers/CurrentPageProvider";

export default function Navbar() {

    const { open } = useOpen();

    const [ state ] = useContext(CurrentPageContext);

    return (
        <Stack h="$full" w={"250px"} bgColor={"$blackAlpha12"} direction={"column"} gap={"$2"}>
            <Heading h={"$12"} color={"$whiteAlpha12"} display={"flex"} alignItems={"center"} justifyContent={"center"} w={"$full"} size={"xl"}>
                E-Lib
            </Heading>
            <VStack>
                {/* <Button 
                    fullWidth 
                    borderRadius={"0"} 
                    bgColor={ state.currentPage == "/" ? "$accent11" : "transparent" } 
                    onClick={() => open("/")}
                >
                    Dashboard
                </Button>
                <Button 
                    fullWidth 
                    borderRadius={"0"} 
                    bgColor={ state.currentPage == "/circulation" ? "$accent11" : "transparent" } 
                    onClick={() => open("/circulation")}
                >
                    Circulation
                </Button> */}
                <Button 
                    fullWidth 
                    borderRadius={"0"} 
                    bgColor={ state.currentPage == "/items" ? "$accent11" : "transparent" } 
                    onClick={() => open("/items")}
                >
                    Books
                </Button>
                <Button 
                    fullWidth 
                    borderRadius={"0"} 
                    bgColor={ state.currentPage == "/patrons" ? "$accent11" : "transparent" } 
                    onClick={() => open("/patrons")}
                >
                    Students
                </Button>
            </VStack>
        </Stack>
    )
}