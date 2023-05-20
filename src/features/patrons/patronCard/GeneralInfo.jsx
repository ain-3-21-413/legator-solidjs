import { HStack, Image, Input, SimpleGrid, SimpleOption, SimpleSelect, Text, VStack } from "@hope-ui/solid";
import { CurrentPatronContext } from "../../../providers/CurrentPatron";
import { onMount, useContext } from "solid-js";

export default function GeneralInfo() {

    const [state, { handleInput, handleSelect }] = useContext(CurrentPatronContext);

    return (
        <HStack w={"$full"} justifyContent={"space-between"} gap={"$3"} backgroundColor={"white"} p={"$3"}>
            <Image src="https://fakeimg.pl/155x200" h={"200px"} w={"155px"} fit="cover" />
            <VStack w={"$full"} alignItems={"start"}>
                <Text>
                    First | Middle | Last Name
                </Text>
                <HStack w={"$full"} gap={"$1"}>
                    <Input name="firstName" onInput={(e) => handleInput(e)} backgroundColor={"$blackAlpha5"} value={state.newPatron.firstName} />
                    <Input name="middleName" onInput={(e) => handleInput(e)} backgroundColor={"$blackAlpha5"} value={state.newPatron.middleName} />
                    <Input name="lastName" onInput={(e) => handleInput(e)} backgroundColor={"$blackAlpha5"} value={state.newPatron.lastName} />
                </HStack>
                <HStack w={"$full"} gap={"$1"}>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="studentNumber">
                            Student #
                        </label>
                        <Input name="studentNumber" onInput={(e) => handleInput(e)} type="text" id="studentNumber" backgroundColor={"$blackAlpha5"} value={state.newPatron.barcode} />
                    </VStack>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="library">
                            Library
                        </label>
                        <SimpleSelect placeholder="Select" onChange={(value) => handleSelect("library", value)} id="library" backgroundColor={"$blackAlpha5"} value={state.newPatron.library}>
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
                        <SimpleSelect placeholder="Select" onChange={(value) => handleSelect("status", value)} id="status" backgroundColor={"$blackAlpha5"} value={state.newPatron.status}>
                            <SimpleOption value={"ACTIVE"}>
                                Active
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                    <VStack alignItems={"start"} flex={"1"}>
                        <label for="policy">
                            Policy
                        </label>
                        <SimpleSelect placeholder="Select" onChange={(value) => handleSelect("policy", value)} id="policy" backgroundColor={"$blackAlpha5"} value={state.newPatron.policy}>
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