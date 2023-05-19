import { HStack, Heading, Input, SimpleOption, SimpleSelect, VStack } from "@hope-ui/solid";
import { onMount } from "solid-js";
import inputmask from "inputmask";

export default function Personal() {

    onMount(() => {
        const studentIdInput = document.getElementById("patron-student-id");
        inputmask("AAA-9-99-999").mask(studentIdInput);
    })

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Identifiers
                </Heading>
                <HStack w={"$full"} justifyContent={"start"} gap={"$1"}>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="studentId">
                            Student #
                        </label>
                        <Input id="patron-student-id" />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="birthDate">
                            Birth Date
                        </label>
                        <Input type="date" id="birthDate" />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label>
                            Sex
                        </label>
                        <SimpleSelect placeholder="Select">
                            <SimpleOption value={"male"}>
                                Male
                            </SimpleOption>
                            <SimpleOption value={"female"}>
                                Female
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                </HStack>
                <HStack w={"$full"} justifyContent={"start"} gap={"$1"}>
                    {/* <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="ssn">
                            SSN
                        </label>
                        <Input id="ssn" />
                    </VStack> */}
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="nickname">
                            Nickname
                        </label>
                        <Input id="nickname" />
                    </VStack>
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
                        <SimpleSelect placeholder="Select">
                            <SimpleOption value={"one"}>
                                One
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label>
                            2nd Location
                        </label>
                        <SimpleSelect placeholder="Select">
                            <SimpleOption value={"one"}>
                                One
                            </SimpleOption>
                        </SimpleSelect>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label>
                            Group
                        </label>
                        <SimpleSelect placeholder="Select">
                            <SimpleOption value={"one"}>
                                One
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
                        <Input type="date" id="graduationDate" />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="accountExpiration">
                            Account Expiration
                        </label>
                        <Input type="date" id="accountExpiration" />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="suspensionDate">
                            Suspension Date
                        </label>
                        <Input type="date" id="suspensionDate" />
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    )
}