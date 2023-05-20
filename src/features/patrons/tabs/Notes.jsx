import { Textarea, VStack } from "@hope-ui/solid";
import { CurrentPatronContext } from "../../../providers/CurrentPatron";
import { useContext } from "solid-js";

export default function Notes() {

    const [state, { handleInput }] = useContext(CurrentPatronContext);

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <VStack alignItems={"start"} w={"$full"} flexGrow={"1"}>
                <label for="generalNotes">
                    General Notes
                </label>
                <Textarea name="generalNotes" onInput={(e) => handleInput(e)} id="generalNotes" flexGrow={"1"} />
            </VStack>
            <VStack alignItems={"start"} w={"$full"} flexGrow={"1"}>
                <label for="alertNotes">
                    Alert Notes
                </label>
                <Textarea name="alertNotes" onInput={(e) => handleInput(e)} id="alertNotes" flexGrow={"1"} />
            </VStack>
        </VStack>
    )
}