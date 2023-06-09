import { Button, Checkbox, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleOption, SimpleSelect, Text, VStack } from "@hope-ui/solid"
import { useContext } from "solid-js"
import { CurrentPatronContext } from "../../../providers/CurrentPatron"

export default function PatronSearchModal(props) {

    const [state, { searchPatron, setSearchPatron, search }] = useContext(CurrentPatronContext);

    return (
        <Modal opened={props.isOpen()} onClose={() => {props.onClose(); setSearchPatron("firstName", "");
        setSearchPatron("middleName", "");
        setSearchPatron("lastName", "");
        setSearchPatron("sex", "");
        setSearchPatron("group", "");
        setSearchPatron("homeroom", "");
        setSearchPatron("secondLocation", "");}} size={"2xl"} initialFocus="#searchFirstName" closeOnOverlayClick={false}>
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
                            <Input size={"sm"} id="searchFirstName" onInput={(e) => {setSearchPatron("firstName", e.target.value)}} value={searchPatron.firstName}/>
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"} gap={"$1"}>
                            <Text flexShrink={"0"}>
                                Middle Name
                            </Text>
                            <Input value={searchPatron.middleName} size={"sm"} onInput={(e) => {setSearchPatron("middleName", e.target.value)}} />
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"} gap={"$1"} mb={"$3"}>
                            <Text flexShrink={"0"}>
                                Last Name
                            </Text>
                            <Input value={searchPatron.lastName} size={"sm"} onInput={(e) => {setSearchPatron("lastName", e.target.value)}} />
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"} gap={"$1"} mb={"$3"}>
                            <Text flexShrink={"0"}>
                                Sex
                            </Text>
                            <SimpleSelect value={searchPatron.sex} w={"$full"} placeholder={"Select"} onChange={(v) => setSearchPatron("sex", v)}>
                                <SimpleOption value={"MALE"}>
                                    Male
                                </SimpleOption>
                                <SimpleOption value={"FEMALE"}>
                                    Female
                                </SimpleOption>
                            </SimpleSelect>
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"} gap={"$1"} mb={"$3"}>
                            <Text flexShrink={"0"} onChange={(v) => setSearchPatron("group", v)}>
                                Group
                            </Text>
                            <SimpleSelect value={searchPatron.group} placeholder="Select">
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
                        <VStack alignItems={"start"} w={"$full"} gap={"$1"} mb={"$3"} onChange={(v) => setSearchPatron("homeroom", v)}>
                            <Text flexShrink={"0"}>
                                Homeroom
                            </Text>
                            <SimpleSelect value={searchPatron.homeroom} placeholder="Select">
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
                        <VStack alignItems={"start"} w={"$full"} gap={"$1"} mb={"$3"} onChange={(v) => setSearchPatron("secondLocation", v)}>
                            <Text flexShrink={"0"}>
                                Second location
                            </Text>
                            <SimpleSelect value={searchPatron.secondLocation} placeholder="Select">
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
                    </VStack>
                </ModalBody>
                <ModalFooter justifyContent={"space-between"}>
                    <Button colorScheme={"danger"} onClick={() => {
                        setSearchPatron("firstName", "");
                        setSearchPatron("middleName", "");
                        setSearchPatron("lastName", "");
                        setSearchPatron("sex", "");
                        setSearchPatron("group", "");
                        setSearchPatron("homeroom", "");
                        setSearchPatron("secondLocation", "");
                    }}>
                        Clear
                    </Button>
                    <HStack gap={"$3"}>
                        <Button onClick={() => {
                            search();
                            props.onClose();
                            setSearchPatron("firstName", "");
                            setSearchPatron("middleName", "");
                            setSearchPatron("lastName", "");
                            setSearchPatron("sex", "");
                            setSearchPatron("group", "");
                            setSearchPatron("homeroom", "");
                            setSearchPatron("secondLocation", "");
                        }}>
                            Search
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}