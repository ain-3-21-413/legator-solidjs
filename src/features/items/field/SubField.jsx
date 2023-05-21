import { Button, HStack, Heading, IconButton, Input, Text, Textarea, createDisclosure } from "@hope-ui/solid";
import { TbCopy, TbCopyOff } from "solid-icons/tb";
import { FiEdit } from 'solid-icons/fi'
import { Match, Show, Switch, useContext } from "solid-js";
import { CurrentBookContext } from "../../../providers/CurrentBook";

 function SubField(props) {

    const { handleInput, newBook } = useContext(CurrentBookContext);

    return (
        <HStack w={"$full"} gap={"$1_5"}>
            <Text>{props.number}</Text>
            <Heading fontWeight={"$normal"} flexShrink={"0"}>{props.name}</Heading>
            <Switch>
                <Match when={props.isTextarea}>
                    <Textarea id={props.fullName} onInput={(event) => handleInput(event)} name={props.fullName} />
                </Match>
                <Match when={!props.isTextarea}>
                    <Input id={props.fullName} value={newBook["fields"]?.[props.fullName] ?? ""} onInput={(event) => handleInput(event)} name={props.fullName} size={"xs"}></Input>
                </Match>
            </Switch>
            <Show when={props.required}>
                <Text color={"$danger11 "}>Required</Text>
            </Show>
            <IconButton tabIndex={"-1"} onClick={() => {}} display={props.editable ? "block":"none"} size={"xs"} variant={"ghost"}>
                <FiEdit />
            </IconButton>
            <Show when={props.repeatable}>
                <HStack gap={"$1_5"}>
                    <IconButton tabIndex={"-1"} size={"xs"} variant={"ghost"}>
                        <TbCopy />
                    </IconButton>
                    <IconButton tabIndex={"-1"} size={"xs"} variant={"ghost"}>
                        <TbCopyOff />
                    </IconButton>
                </HStack>
            </Show>
            
        </HStack>    
    );
}
    export default SubField;