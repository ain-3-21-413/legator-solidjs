import { Button, Checkbox, HStack, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleOption, SimpleSelect, Table, Tbody, Td, Text, Th, Thead, Tr, VStack, createDisclosure, notificationService } from "@hope-ui/solid"
import { For, Show, createSignal, useContext } from "solid-js";
import { CurrentBookContext } from "../../../providers/CurrentBook";
import { CurrentPatronContext } from "../../../providers/CurrentPatron";
import { createStore } from "solid-js/store";
import axios from "axios";
import useOpen from "../../../hooks/useOpen";

export default function Copies() {

    const { currentBook, fetchCopies} = useContext(CurrentBookContext);
    const [operation, setOperation] = createStore({
        title: "", 
        type: "", 
        item: "", 
        patron: "", 
    })
    const { open } = useOpen();
    const [state, { searchPatron, setSearchPatron, search }] = useContext(CurrentPatronContext);
    const [patrons, setPatrons] = createSignal();
    const { isOpen, onOpen, onClose } = createDisclosure();
    const [showPatrons, setShowPatrons] = createSignal();
    const [itemId, setItemId] = createSignal();
    const [studentNumber, setStudentNumber] = createSignal();

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <Modal opened={isOpen()} onClose={() => {onClose(); setSearchPatron("firstName", "");
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
                    <For each={patrons()}>{(patron) =>
                            <HStack w="$full" justifyContent={"space-between"}>
                                {patron.firstName} {patron.lastName} { patron.group != null ? "from " + patron.group : "" }
                                <Button onClick={() => {
                                    axios.post(window.HOST_ADDRESS + "/circulation/check-out?item-id=" + itemId() + "&student-number=" + patron.studentNumber)
                                    .then(response => {
                                        setPatrons([]);
                                        notificationService.show({
                                            status: "success", 
                                            title: "Checked out!",
                                        });
                                        fetchCopies(currentBook.origin.id);
                                        onClose();
                                    })
                                    .catch(error => console.log(error));
                                }}>
                                    Select
                                </Button>
                            </HStack>
                    }</For>
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
                            axios.post(window.HOST_ADDRESS + "/patrons/search", {
                                ...searchPatron
                            })
                            .then(response => {
                                setPatrons(response.data);
                                setShowPatrons(true);
                            })
                            .catch(error =>
                                console.log(error)
                            );
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
            <VStack w={"$full"} alignItems={"start"} gap={"$3"}>
                <Heading color={"$accent11"}>
                    Copies
                </Heading>
                <VStack w={"$full"}>
                            <HStack w={"$full"} justifyContent={"end"}>
                                <Button onClick={() => {
                                    const id = currentBook["updated"]["id"];
                                    axios.post(window.HOST_ADDRESS + "/items", {
                                        bookId: id, 
                                    })
                                    .then(response => {
                                        console.log(response.data);
                                        fetchCopies(currentBook.origin.id);
                                        notificationService.show({
                                            status: "success", 
                                            title: "New copy added!"
                                        })
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    })
                                }}>
                                    Add copy
                                </Button>
                            </HStack>
                    <Table dense highlightOnHover>
                        <Thead>
                            <Tr>
                                <Th>
                                    #
                                </Th>
                                <Th>
                                    Holder
                                </Th>
                                <Th>
                                    Issued at
                                </Th>
                                <Th>
                                    Due to
                                </Th>
                                <Th>
                                    
                                </Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <For each={currentBook.copies}>{(copy) => 
                                <Tr>
                                    <Td>
                                        { copy.id }
                                    </Td>
                                    <Td>
                                        { copy.patron == null ? "In library" : copy.patron.firstName + " " + copy.patron.lastName }
                                    </Td>
                                    <Td>
                                        { copy.issuedAt == null ? "-" : copy.issuedAt }
                                    </Td>
                                    <Td>
                                        { copy.dueTo == null ? "-" : copy.dueTo }
                                    </Td>
                                    <Td>
                                        <Button size={"sm"} fullWidth onClick={() => {
                                            setOperation("title",  copy.status == "AVAILABLE" ? "Check out" : copy.status == "CHECKED_OUT" ? "Check in" : "Other");
                                            setOperation("type", copy.status == "AVAILABLE" ? "check_out" : copy.status == "CHECKED_OUT" ? "check_in" : "Other");
                                            setOperation("item", copy.id);
                                            setItemId(copy.id);
                                            operation.type == "check_out" ? onOpen() : axios.post(window.HOST_ADDRESS + "/circulation/check-in?item-id=" + copy.id)
                                            .then(response => {
                                                fetchCopies(currentBook.origin.id);
                                                notificationService.show({
                                                    status: "success", 
                                                    title: "Checked in!"
                                                })
                                            })
                                            .catch(error => console.log(error));
                                        }}>
                                            { copy.status == "AVAILABLE" ? "Check out" : copy.status == "CHECKED_OUT" ? "Check in" : "Other" }
                                        </Button>
                                    </Td>
                                </Tr>
                            }</For>
                        </Tbody>
                    </Table>
                </VStack>
            </VStack>
        </VStack>
    )
}