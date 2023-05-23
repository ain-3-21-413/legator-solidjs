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
                            <SimpleOption value={"R201"}>
                                201
                            </SimpleOption>
                            <SimpleOption value={"R202"}>
                                202
                            </SimpleOption>
                            <SimpleOption value={"R203"}>
                                203
                            </SimpleOption>
                            <SimpleOption value={"R204"}>
                                204
                            </SimpleOption>
                            <SimpleOption value={"R205"}>
                                205
                            </SimpleOption>
                            <SimpleOption value={"R206"}>
                                206
                            </SimpleOption>
                            <SimpleOption value={"R207"}>
                                207
                            </SimpleOption>
                            <SimpleOption value={"R208"}>
                                208
                            </SimpleOption>
                            <SimpleOption value={"R209"}>
                                209
                            </SimpleOption>
                            <SimpleOption value={"R10"}>
                                210
                            </SimpleOption>
                            <SimpleOption value={"R211"}>
                                211
                            </SimpleOption>
                            <SimpleOption value={"R212"}>
                                212
                            </SimpleOption>
                            <SimpleOption value={"R213"}>
                                213
                            </SimpleOption>
                            <SimpleOption value={"R214"}>
                                214
                            </SimpleOption>
                            <SimpleOption value={"R215"}>
                                215
                            </SimpleOption>
                            <SimpleOption value={"R217"}>
                                217
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label>
                            2nd Location
                        </label>
                        <SimpleSelect onClick={() => setEditing(true)} disabled={patronEditingState.isLocked} placeholder="Select" onChange={(value) => handleSelect("secondLocation", value)} value={state.newPatron.secondLocation}>
                        <SimpleOption value={"R201"}>
                                201
                            </SimpleOption>
                            <SimpleOption value={"R202"}>
                                202
                            </SimpleOption>
                            <SimpleOption value={"R203"}>
                                203
                            </SimpleOption>
                            <SimpleOption value={"R204"}>
                                204
                            </SimpleOption>
                            <SimpleOption value={"R205"}>
                                205
                            </SimpleOption>
                            <SimpleOption value={"R206"}>
                                206
                            </SimpleOption>
                            <SimpleOption value={"R207"}>
                                207
                            </SimpleOption>
                            <SimpleOption value={"R208"}>
                                208
                            </SimpleOption>
                            <SimpleOption value={"R209"}>
                                209
                            </SimpleOption>
                            <SimpleOption value={"R10"}>
                                210
                            </SimpleOption>
                            <SimpleOption value={"R211"}>
                                211
                            </SimpleOption>
                            <SimpleOption value={"R212"}>
                                212
                            </SimpleOption>
                            <SimpleOption value={"R213"}>
                                213
                            </SimpleOption>
                            <SimpleOption value={"R214"}>
                                214
                            </SimpleOption>
                            <SimpleOption value={"R215"}>
                                215
                            </SimpleOption>
                            <SimpleOption value={"R217"}>
                                217
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label>
                            Group
                        </label>
                        <SimpleSelect onClick={() => setEditing(true)} disabled={patronEditingState.isLocked} placeholder="Select" onChange={(value) => handleSelect("group", value)} value={state.newPatron.group}>
                            <SimpleOption value={"AIN120"}>
                                AIN-1-20
                            </SimpleOption>
                            <SimpleOption value={"AIN220"}>
                                AIN-2-20
                            </SimpleOption>
                            <SimpleOption value={"AIN121"}>
                                AIN-1-21
                            </SimpleOption>
                            <SimpleOption value={"AIN221"}>
                                AIN-2-21
                            </SimpleOption>
                            <SimpleOption value={"MIN121"}>
                                MIN-1-21
                            </SimpleOption>
                            <SimpleOption value={"WIN121"}>
                                WIN-1-21
                            </SimpleOption>
                            <SimpleOption value={"AIN122"}>
                                AIN-1-22
                            </SimpleOption>
                            <SimpleOption value={"AIN222"}>
                                AIN-2-22
                            </SimpleOption>
                            <SimpleOption value={"AIN322"}>
                                AIN-3-22
                            </SimpleOption>
                            <SimpleOption value={"MIN122"}>
                                MIN-1-22
                            </SimpleOption>
                            <SimpleOption value={"WIN122"}>
                                WIN-1-22
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