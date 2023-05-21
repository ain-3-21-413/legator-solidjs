import { Button, HStack, Heading, IconButton, Input, Text, createDisclosure } from "@hope-ui/solid";
import { TbCopy, TbCopyOff } from "solid-icons/tb";
import { FiEdit } from 'solid-icons/fi'
import { Show, useContext } from "solid-js";

 function SubField(props) {

    return (
        <HStack w={"$full"} gap={"$1_5"}>
            <Text>{props.number}</Text>
            <Heading fontWeight={"$normal"} flexShrink={"0"}>{props.name}</Heading>
            <Input size={"xs"}></Input>
            <Show when={props.required}>
                <Text color={"$danger11 "}>Required</Text>
            </Show>
            {/* <IconButton onClick={onOpen} display={props.editable ? "block":"none"} size={"xs"} variant={"ghost"}>
                <FiEdit />
            </IconButton> */}
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