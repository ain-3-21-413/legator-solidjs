import { HStack, Heading, Input, VStack } from "@hope-ui/solid";

export default function Access() {

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <HStack gap={"$1"} alignItems={"start"} w={"$full"}>
                <VStack alignItems={"start"} gap={"$3"} w={"$full"}>
                    <Heading color={"$accent11"}>
                        Login
                    </Heading>
                    <VStack gap={"$1"} w={"$full"}>
                        <VStack alignItems={"start"} w={"$full"}>
                            <label for="username">
                                Username
                            </label>
                            <Input id="username" />
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"}>
                            <label for="password">
                                Password
                            </label>
                            <Input id="password" />
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"}>
                            <label for="confirmPassword">
                                Confirm Password
                            </label>
                            <Input id="confirmPassword" />
                        </VStack>
                    </VStack>
                </VStack>
            </HStack>
        </VStack>
    )
}