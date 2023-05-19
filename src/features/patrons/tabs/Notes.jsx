import { Textarea, VStack } from "@hope-ui/solid";

export default function Notes() {

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <VStack alignItems={"start"} w={"$full"} flexGrow={"1"}>
                <label for="generalNotes">
                    General Notes
                </label>
                <Textarea id="generalNotes" flexGrow={"1"} />
            </VStack>
            <VStack alignItems={"start"} w={"$full"} flexGrow={"1"}>
                <label for="alertNotes">
                    Alert Notes
                </label>
                <Textarea id="alertNotes" flexGrow={"1"} />
            </VStack>
        </VStack>
    )
}