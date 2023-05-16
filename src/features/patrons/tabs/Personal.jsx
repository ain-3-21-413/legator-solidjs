import { Heading, VStack } from "@hope-ui/solid";

export default function Personal() {

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"}>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"} p={"$7"}>
                <Heading color={"$accent11"}>
                    Identifiers
                </Heading>
            </VStack>
        </VStack>
    )
}