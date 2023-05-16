import { HStack, Heading, IconButton, Input, Stack, Text, VStack } from "@hope-ui/solid";
import { BiRegularDetail } from 'solid-icons/bi';

export default function Zero() {

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Section 0
                </Heading>
                <VStack w={"$full"}>
                    
                </VStack>
            </VStack>
        </VStack>
    )
}