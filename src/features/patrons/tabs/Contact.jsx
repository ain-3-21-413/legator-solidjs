import { HStack, Heading, Input, Textarea, VStack } from "@hope-ui/solid";

export default function Contact() {

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
                        <Input id="primaryEmail" />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="otherEmails">
                            Other emails
                        </label>
                        <Input id="otherEmails" />
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
                        <Input id="primaryPhone" />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="mobile">
                            Mobile
                        </label>
                        <Input id="mobile" />
                    </VStack>
                    <VStack alignItems={"start"} flexBasis={"calc(100%/3)"}>
                        <label for="sms">
                            Messengers
                        </label>
                        <Input id="sms" />
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