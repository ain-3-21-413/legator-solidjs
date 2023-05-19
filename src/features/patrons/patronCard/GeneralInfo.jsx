import { HStack, Image, Input, SimpleGrid, SimpleOption, SimpleSelect, Text, VStack } from "@hope-ui/solid";
import { CurrentPatronContext } from "../../../providers/CurrentPatron";
import { onMount, useContext } from "solid-js";
import inputmask from "inputmask";

export default function GeneralInfo() {

    const [state] = useContext(CurrentPatronContext);

    onMount(() => {
        const barcodeInput = document.getElementById("patron-barcode");
        inputmask("9999-9999-9999").mask(barcodeInput);
    })

    return (
        <HStack w={"$full"} justifyContent={"space-between"} gap={"$3"} backgroundColor={"white"} p={"$3"}>
            <Image src="https://fakeimg.pl/155x200" h={"200px"} w={"155px"} fit="cover" />
            <VStack w={"$full"} alignItems={"start"}>
                <Text>
                    First | Middle | Last Name
                </Text>
                <HStack w={"$full"} gap={"$1"}>
                    <Input backgroundColor={"$blackAlpha5"} />
                    <Input backgroundColor={"$blackAlpha5"} />
                    <Input backgroundColor={"$blackAlpha5"} />
                </HStack>
                <HStack w={"$full"} gap={"$1"}>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="patron-barcode">
                            Barcode
                        </label>
                        <Input type="text" id="patron-barcode" backgroundColor={"$blackAlpha5"} />
                    </VStack>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="site">
                            Site
                        </label>
                        <SimpleSelect id="site" backgroundColor={"$blackAlpha5"} defaultValue={"one"}>
                            <SimpleOption value={"one"}>
                                One
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                </HStack>
                <HStack w={"$full"} gap={"$1"}>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="site">
                            Status
                        </label>
                        <SimpleSelect id="status" backgroundColor={"$blackAlpha5"} defaultValue={"active"}>
                            <SimpleOption value={"active"}>
                                Active
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="policy">
                            Policy
                        </label>
                        <SimpleSelect id="policy" backgroundColor={"$blackAlpha5"} defaultValue={"basicStudent"}>
                            <SimpleOption value={"basicStudent"}>
                                Basic Student
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                </HStack>
            </VStack>
        </HStack>
    )
}