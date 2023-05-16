import { HStack, Image, Input, SimpleGrid, SimpleOption, SimpleSelect, Text, VStack } from "@hope-ui/solid";
import { CurrentPatronContext } from "../../../providers/CurrentPatron";
import { useContext } from "solid-js";

export default function GeneralInfo() {

    const [state] = useContext(CurrentPatronContext);

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
                        <label for="barcode">
                            Barcode
                        </label>
                        <Input id="barcode" backgroundColor={"$blackAlpha5"} />
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
            <SimpleGrid columns={2} w={"300px"}>
                <VStack p={"$1"} borderRightWidth={"1px"} borderBottomWidth={"1px"}>
                    <Text textTransform={"uppercase"}>
                        Out
                    </Text>
                    <Text>
                        {state.currentPatron.stats.outs} 
                    </Text>
                </VStack>
                <VStack p={"$1"} borderBottomWidth={"1px"}>
                    <Text textTransform={"uppercase"}>
                        Hold
                    </Text>
                    <Text>
                        {state.currentPatron.stats.holds} 
                    </Text>
                </VStack>
                <VStack p={"$1"} borderRightWidth={"1px"}>
                    <Text textTransform={"uppercase"}>
                        Suggestion
                    </Text>
                    <Text>
                        {state.currentPatron.stats.suggestions} 
                    </Text>
                </VStack>
                <VStack p={"$1"}>
                    <Text textTransform={"uppercase"}>
                        Last Use
                    </Text>
                    <Text>
                        {state.currentPatron.stats.lastUse} 
                    </Text>
                </VStack>
            </SimpleGrid>
        </HStack>
    )
}