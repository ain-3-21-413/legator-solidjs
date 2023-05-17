import { HStack, Heading, IconButton, Input, Stack, Text, VStack } from "@hope-ui/solid";
import { BiRegularDetail } from 'solid-icons/bi';
import Field from "../field/Field";
import SubField from "../field/SubField";

export default function Zero() {

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Section 0
                </Heading>
                <VStack w={"$full"}>
                    <Field number="001" name="Control Number" removable >
                        <SubField number="00" name="contol field"></SubField>
                    </Field>
                    <Field number="015" name="National Bibliography Number" hasIndicators copiable removable>
                        <SubField number="2" name="Source" ></SubField>
                        <SubField number="a" name="National bibliography number"  repeatable></SubField>
                        <SubField number="q" name="Qualifying information" repeatable></SubField>
                        
                    </Field>
                    <Field number="016" name="National Bibliography Number"></Field>
                </VStack>
            </VStack>
        </VStack>
    )
}