import { HStack, Heading, Input, SimpleOption, SimpleSelect, VStack } from "@hope-ui/solid";
import { onMount, useContext } from "solid-js";
import { CurrentPatronContext } from "../../../providers/CurrentPatron";
import { PatronEditingContext } from "../../../providers/PatronEditingProvider";

export default function Personal() {

    const [state, { handleInput, handleSelect }] = useContext(CurrentPatronContext);
    const [patronEditingState, { setEditing }] = useContext(PatronEditingContext);

    onMount(() => {
    })

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Identifiers
                </Heading>
                <HStack w={"$full"} justifyContent={"start"} gap={"$1"}>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="birthDate">
                            Birth Date
                        </label>
                        <Input onClick={() => setEditing(true)} disabled={patronEditingState.isLocked} name="birthDate" onInput={(e) => handleInput(e)} type="date" id="birthDate" value={state.newPatron.birthDate} />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label>
                            Sex
                        </label>
                        <SimpleSelect onClick={() => setEditing(true)} disabled={patronEditingState.isLocked} onChange={(value) => handleSelect("sex", value)} placeholder="Select" value={state.newPatron.sex}>
                            <SimpleOption value={"MALE"}>
                                Male
                            </SimpleOption>
                            <SimpleOption value={"FEMALE"}>
                                Female
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                </HStack>
                <HStack w={"$full"} justifyContent={"start"} gap={"$1"}>
                </HStack>
            </VStack>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Locators
                </Heading>
                <HStack w={"$full"} justifyContent={"start"} gap={"$1"}>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label>
                            Homeroom
                        </label>
                        <SimpleSelect onClick={() => setEditing(true)} disabled={patronEditingState.isLocked} placeholder="Select" onChange={(value) => handleSelect("homeroom", value)} value={state.newPatron.homeroom}>
                            <SimpleOption value={"201"}>
                                201
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label>
                            2nd Location
                        </label>
                        <SimpleSelect onClick={() => setEditing(true)} disabled={patronEditingState.isLocked} placeholder="Select" onChange={(value) => handleSelect("secondLocation", value)} value={state.newPatron.secondLocation}>
                            <SimpleOption value={"201"}>
                                201
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label>
                            Group
                        </label>
                        <SimpleSelect onClick={() => setEditing(true)} disabled={patronEditingState.isLocked} placeholder="Select" onChange={(value) => handleSelect("group", value)} value={state.newPatron.group}>
                            <SimpleOption value={"AIN-1-21"}>
                                AIN-1-21
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                </HStack>
            </VStack>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Dates
                </Heading>
                <HStack w={"$full"} justifyContent={"start"} gap={"$1"}>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="graduationDate">
                            Graduation Date
                        </label>
                        <Input onClick={() => setEditing(true)} disabled={patronEditingState.isLocked} name="graduationDate" onInput={(e) => handleInput(e)} type="date" id="graduationDate" value={state.newPatron.graduationDate} />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="accountExpiration">
                            Account Expiration
                        </label>
                        <Input onClick={() => setEditing(true)} disabled={patronEditingState.isLocked} name="accountExpiration" onInput={(e) => handleInput(e)} type="date" id="accountExpiration" value={state.newPatron.accountExpiration} />
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    )
}