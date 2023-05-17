import { Box, HStack, Image, Text } from "@hope-ui/solid";

const data = {
    name: "Demo"
}

export default function Header() {

    return (
        <HStack h={"$12"} w={"$full"} bgColor={"$accent11"} justifyContent={"end"} p={"$3"}>
            <HStack gap={"$2"}>
                <Text color={"$whiteAlpha12"} fontWeight={"$medium"}>
                    Hi, {data.name}
                </Text>
                <Image h={"$8"} src="https://img.freepik.com/free-icon/user_318-159711.jpg"></Image>
            </HStack>
        </HStack>
    )
}