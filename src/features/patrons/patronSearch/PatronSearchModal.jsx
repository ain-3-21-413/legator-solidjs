import { Button, Checkbox, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleOption, SimpleSelect, Text, VStack } from "@hope-ui/solid"

export default function PatronSearchModal(props) {

    return (
        <Modal opened={props.isOpen()} onClose={props.onClose} size={"2xl"} initialFocus="#searchFirstName" closeOnOverlayClick={false}>
            <ModalOverlay />
                <ModalContent>
                <ModalCloseButton />
                <ModalHeader>
                    Search for patrons
                </ModalHeader>
                <ModalBody>
                    <VStack p={"$3"} gap={"$3"} alignItems={"start"} fontSize={"14px"}>
                        <VStack alignItems={"start"} w={"$full"} gap={"$1"}>
                            <Text flexShrink={"0"}>
                                First Name
                            </Text>
                            <Input size={"sm"} id="searchFirstName" />
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"} gap={"$1"}>
                            <Text flexShrink={"0"}>
                                Middle Name
                            </Text>
                            <Input size={"sm"} />
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"} gap={"$1"} mb={"$3"}>
                            <Text flexShrink={"0"}>
                                Last Name
                            </Text>
                            <Input size={"sm"} />
                        </VStack>
                        <HStack gap={"$2"} w={"$full"} >
                            <SimpleSelect defaultValue={"barcode"} size={"sm"}>
                                <SimpleOption flexShrink={"0"} value={"barcode"}>
                                    Barcode
                                </SimpleOption>
                                <SimpleOption flexShrink={"0"} value={"studentNumber"}>
                                    Student #
                                </SimpleOption>
                            </SimpleSelect>
                            <Input size={"sm"} placeholder={"From"} />
                            <Input size={"sm"} placeholder={"Through"} />
                        </HStack>
                        <HStack gap={"$2"} w={"$full"} >
                            <SimpleSelect defaultValue={"patronsAdded"} size={"sm"}>
                                <SimpleOption flexShrink={"0"} value={"patronsAdded"}>
                                    Patrons Added
                                </SimpleOption>
                                <SimpleOption flexShrink={"0"} value={"birthdate"}>
                                    Birthdate
                                </SimpleOption>
                                <SimpleOption flexShrink={"0"} value={"graduationDate"}>
                                    Graduation Date
                                </SimpleOption>
                                <SimpleOption flexShrink={"0"} value={"suspensionDate"}>
                                    Suspension ned Date
                                </SimpleOption>
                            </SimpleSelect>
                            <Input type="date" size={"sm"} placeholder={"From"} />
                            <Input type="date" size={"sm"} placeholder={"Through"} />
                        </HStack>
                        <HStack gap={"$2"} w={"$full"} >
                            <SimpleSelect defaultValue={"policy"} size={"sm"}>
                                <SimpleOption flexShrink={"0"} value={"policy"}>
                                    Policy
                                </SimpleOption>
                                <SimpleOption flexShrink={"0"} value={"group"}>
                                    Group
                                </SimpleOption>
                                <SimpleOption flexShrink={"0"} value={"status"}>
                                    Status
                                </SimpleOption>
                            </SimpleSelect>
                            <SimpleSelect defaultValue={"any"} size={"sm"}>
                                <SimpleOption flexShrink={"0"} value={"any"}>
                                    Any
                                </SimpleOption>
                            </SimpleSelect>
                        </HStack>
                        <HStack gap={"$2"} w={"$full"} >
                            <SimpleSelect defaultValue={"homeroom"} size={"sm"}>
                                <SimpleOption flexShrink={"0"} value={"homeroom"}>
                                    Homeroom
                                </SimpleOption>
                                <SimpleOption flexShrink={"0"} value={"secondLocation"}>
                                    2nd Location
                                </SimpleOption>
                            </SimpleSelect>
                            <SimpleSelect defaultValue={"any"} size={"sm"}>
                                <SimpleOption flexShrink={"0"} value={"any"}>
                                    Any
                                </SimpleOption>
                            </SimpleSelect>
                        </HStack>
                        <HStack gap={"$2"} w={"$full"} >
                            <SimpleSelect defaultValue={"username"} size={"sm"}>
                                <SimpleOption flexShrink={"0"} value={"username"}>
                                    Username
                                </SimpleOption>
                                <SimpleOption flexShrink={"0"} value={"nickname"}>
                                    Nickname
                                </SimpleOption>
                                <SimpleOption flexShrink={"0"} value={"ssn"}>
                                    SSN
                                </SimpleOption>
                            </SimpleSelect>
                            <Input size={"sm"} />
                        </HStack>
                        <Checkbox>
                            Add to current results
                        </Checkbox>
                    </VStack>
                </ModalBody>
                <ModalFooter justifyContent={"space-between"}>
                    <Button colorScheme={"danger"}>
                        Clear
                    </Button>
                    <HStack gap={"$3"}>
                        <Button>
                            Search
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}