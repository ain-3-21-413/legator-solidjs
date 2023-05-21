import { Button, HStack, Heading, IconButton, Input, Text, Textarea, createDisclosure } from "@hope-ui/solid";
import { TbCopy, TbCopyOff } from "solid-icons/tb";
import { FiEdit } from 'solid-icons/fi'
import { Match, Show, Switch } from "solid-js";

 function SubField(props) {

    return (
        <HStack w={"$full"} gap={"$1_5"}>
            <Text>{props.number}</Text>
            <Heading fontWeight={"$normal"} flexShrink={"0"}>{props.name}</Heading>
            <Switch>
                <Match when={props.isTextarea}>
                    <Textarea />
                </Match>
                <Match when={!props.isTextarea}>
                    <Input size={"xs"}></Input>
                </Match>
            </Switch>
            <Show when={props.required}>
                <Text color={"$danger11 "}>Required</Text>
            </Show>
            <IconButton onClick={() => {}} display={props.editable ? "block":"none"} size={"xs"} variant={"ghost"}>
                <FiEdit />
            </IconButton>
            <Show when={props.repeatable}>
                <HStack gap={"$1_5"}>
                    <IconButton size={"xs"} variant={"ghost"}>
                        <TbCopy />
                    </IconButton>
                    <IconButton size={"xs"} variant={"ghost"}>
                        <TbCopyOff />
                    </IconButton>
                </HStack>
            </Show>
            
        </HStack>    
    );
}
    export default SubField;