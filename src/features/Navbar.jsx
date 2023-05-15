import { Button, Heading, Stack, VStack } from "@hope-ui/solid";

export default function Navbar() {

    return (
        <Stack h="$full" w={"250px"} bgColor={"$blackAlpha12"} direction={"column"} gap={"$2"}>
            <Heading h={"$12"} color={"$whiteAlpha12"} display={"flex"} alignItems={"center"} justifyContent={"center"} w={"$full"} size={"xl"}>
                E-Lib
            </Heading>
            <VStack>
                <Button fullWidth borderRadius={"0"} bgColor={"transparent"}>
                    Dashboard
                </Button>
                <Button fullWidth borderRadius={"0"} bgColor={"transparent"}>
                    Circulation
                </Button>
                <Button fullWidth borderRadius={"0"} bgColor={"transparent"}>
                    Items
                </Button>
                <Button fullWidth borderRadius={"0"} bgColor={"transparent"}>
                    Patrons
                </Button>
            </VStack>
        </Stack>
    )
}