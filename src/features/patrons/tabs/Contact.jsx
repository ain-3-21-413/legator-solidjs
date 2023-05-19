import { HStack, Heading, Input, InputGroup, InputLeftAddon, Textarea, VStack } from "@hope-ui/solid";
import { onMount } from "solid-js";
import inputmask from "inputmask";

export default function Contact() {

    onMount(() => {
        const phoneInputs = document.getElementsByClassName("patron-phone");
        for (var i = 0; i < phoneInputs.length; i++) {
            inputmask("(999) 99-99-99").mask(phoneInputs[i]);
        }
        console.log(phoneInputs);
    })

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Email
                </Heading>
                <HStack w={"$full"} justifyContent={"start"} gap={"$1"}>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="primaryEmail">
                            Primary Email
                        </label>
                        <Input id="primaryEmail" placeholder="email@example.com" />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="otherEmails">
                            Institute email
                        </label>
                        <Input id="otherEmails" placeholder="email@inai.kg" />
                    </VStack>
                </HStack>
            </VStack>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Phone
                </Heading>
                <HStack w={"$full"} justifyContent={"start"} gap={"$1"}>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="primaryPhone">
                            Primary Phone
                        </label>
                        <InputGroup>
                            <InputLeftAddon>
                                +996
                            </InputLeftAddon>
                            <Input id="primaryPhone" type="tel" class="patron-phone" />
                        </InputGroup>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="mobile">
                            Mobile
                        </label>
                        <InputGroup>
                            <InputLeftAddon>
                                +996
                            </InputLeftAddon>
                            <Input id="mobile" type="tel" class="patron-phone" />
                        </InputGroup>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="messengers">
                            Messengers
                        </label>
                        <InputGroup>
                            <InputLeftAddon>
                                +996
                            </InputLeftAddon>
                            <Input id="messengers" type="tel" class="patron-phone" />
                        </InputGroup>
                    </VStack>
                </HStack>
            </VStack>
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    More
                </Heading>
                <HStack w={"$full"} justifyContent={"start"} gap={"$1"} alignItems={"start"} h={"$full"}>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <VStack alignItems={"start"} w={"$full"}>
                            <label for="address">
                                Address
                            </label>
                            <VStack w={"$full"} gap={"$1"}>
                                <Input id="address" placeholder="Address 1" />
                                <Input placeholder="Address 2" />
                                <Input placeholder="City" />
                                <Input placeholder="Postal Code" />
                                <Input placeholder="Country" />
                            </VStack>
                        </VStack>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <VStack alignItems={"start"} w={"$full"}>
                            <label for="parentGuardian">
                                Parent/Guardian
                            </label>
                            <Input id="parentGuardian" />
                        </VStack>
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"} h={"$full"}>
                        <VStack alignItems={"start"} w={"$full"} h={"$full"}>
                            <label for="contactNotes">
                                Contact Notes
                            </label>
                            <Textarea id="contactNotes" h={"$full"} />
                        </VStack>
                    </VStack>
                </HStack>
            </VStack>
        </VStack>
    )
}