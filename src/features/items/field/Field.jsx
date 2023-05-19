import { HStack, Heading, IconButton, Input, Text, VStack } from "@hope-ui/solid";
import { TbCopy, TbCopyOff } from 'solid-icons/tb'
import { Show } from "solid-js";

 function Field(props) {

    return (
        <VStack w={"$full"} gap={"$2"} borderBottomWidth={"1px"}borderBottomColor={"$blackAlpha5"} py={"$3"}>
            <HStack w={"$full"} gap={"$1_5"}>
                <Heading>
                    {props.number}
                </Heading>
                <Text color={"$accent11"}> ?</Text>
                <Show when={props.hasIndicators}>
                    <Input size={"xs"} w={"25px"} px={"$1"} justifyContent={"center"} display={"flex"}></Input>
                    <Input size={"xs"} w={"25px"} px={"$1"} justifyContent={"center"} display={"flex"}></Input>
        
                </Show>
                
                <Heading color={"$accent11"}>
                    {props.name}
                </Heading>
                <IconButton display={props.copiable ? "block" : "none"} size={"xs"} variant={"ghost"}>
                    <TbCopy />
                </IconButton>
                <IconButton display={props.removable ? "block" : "none"} size={"xs"} variant={"ghost"}>
                    <TbCopyOff />
                </IconButton>
                
            </HStack>
            {props.children}
        </VStack>
    );
}
    export default Field;