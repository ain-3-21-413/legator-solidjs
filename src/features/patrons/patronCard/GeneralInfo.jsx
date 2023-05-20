import { HStack, Image, Input, SimpleGrid, SimpleOption, SimpleSelect, Text, VStack } from "@hope-ui/solid";
import { CurrentPatronContext } from "../../../providers/CurrentPatron";
import { onMount, useContext } from "solid-js";
import inputmask from "inputmask";

export default function GeneralInfo() {

    const [state, { handleInput, handleSelect }] = useContext(CurrentPatronContext);

    onMount(() => {
        const barcodeInput = document.getElementById("patron-barcode");
        inputmask("9999-9999-9999").mask(barcodeInput);
    });

    return (
        <HStack w={"$full"} justifyContent={"space-between"} gap={"$3"} backgroundColor={"white"} p={"$3"}>
            <Image src="https://fakeimg.pl/155x200" h={"200px"} w={"155px"} fit="cover" />
            <VStack w={"$full"} alignItems={"start"}>
                <Text>
                    First | Middle | Last Name
                </Text>
                <HStack w={"$full"} gap={"$1"}>
                    <Input name="firstName" onInput={(e) => handleInput(e)} backgroundColor={"$blackAlpha5"} value={state.currentPatron.firstName} />
                    <Input name="middleName" onInput={(e) => handleInput(e)} backgroundColor={"$blackAlpha5"} value={state.currentPatron.middleName} />
                    <Input name="lastName" onInput={(e) => handleInput(e)} backgroundColor={"$blackAlpha5"} value={state.currentPatron.lastName} />
                </HStack>
                <HStack w={"$full"} gap={"$1"}>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="patron-barcode">
                            Barcode
                        </label>
                        <Input name="barcode" onInput={(e) => handleInput(e)} type="text" id="patron-barcode" backgroundColor={"$blackAlpha5"} />
                    </VStack>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="library">
                            Library
                        </label>
                        <SimpleSelect placeholder="Select" onChange={(value) => handleSelect("library", value)} id="library" backgroundColor={"$blackAlpha5"}>
                            <SimpleOption value={"INAI_KG"}>
                                INAI.KG
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                </HStack>
                <HStack w={"$full"} gap={"$1"}>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="status">
                            Status
                        </label>
                        <SimpleSelect placeholder="Select" onChange={(value) => handleSelect("status", value)} id="status" backgroundColor={"$blackAlpha5"}>
                            <SimpleOption value={"ACTIVE"}>
                                Active
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="policy">
                            Policy
                        </label>
                        <SimpleSelect placeholder="Select" onChange={(value) => handleSelect("policy", value)} id="policy" backgroundColor={"$blackAlpha5"}>
                            <SimpleOption value={"BASIC_STUDENT"}>
                                Basic Student
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                </HStack>
            </VStack>
        </HStack>
    )
}