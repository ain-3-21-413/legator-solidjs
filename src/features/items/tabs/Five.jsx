import { Heading, VStack } from "@hope-ui/solid";
import Field from "../field/Field";
import SubField from "../field/SubField";
import { For } from "solid-js";
import useFieldsConfig from "../../../config/FieldsConfig";

export default function Five() {

    const { fiveFields } = useFieldsConfig();

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Section 5
                </Heading>
                <VStack w={"$full"}>
                    <For each={fiveFields}>{(field) => 
                        <Field 
                            number={field.number} 
                            name={field.name} 
                            removable={field.removable}
                            copiable={field.copiable}
                            hasIndicators={field.hasIndicators}
                        >
                            <For each={field.subfields}>{(subfield) => 
                                <SubField 
                                    number={subfield.number} 
                                    name={subfield.name}
                                    required={subfield.required}
                                    editable={subfield.editable}
                                    repeatable={subfield.repeatable}
                                    isTextarea={subfield.isTextarea}
                                />
                            }</For>
                        </Field>
                    }</For>
                </VStack>
            </VStack>
        </VStack>
    )
}