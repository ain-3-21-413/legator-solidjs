import { Button, HStack, Heading, IconButton, Image, Input, SimpleGrid, SimpleOption, SimpleSelect, TagLabel, Text, VStack } from "@hope-ui/solid";
import { FaSolidLock } from 'solid-icons/fa';
import { FaSolidLockOpen } from 'solid-icons/fa';
import { FaSolidPlus } from 'solid-icons/fa';
import { For, Match, Switch, createSignal } from "solid-js";
import { AiOutlineSortAscending } from 'solid-icons/ai';
import { AiOutlineSortDescending } from 'solid-icons/ai';
import SearchResult from "../features/patrons/SearchResult";

const data = {
    results: [
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
        {
            date: "01/01/2023",
            name: "Amir Asanov",
        },
    ],
    info: {
        stats: {
            outs: 2,
            holds: 1,
            suggestions: 1,
            lastUse: "01/01/2023",
        }
    }
}

export default function Patrons() {

    const [ isLocked, setLocked ] = createSignal(true);
    const [ isEditing, setEditing ] = createSignal(true);
    const [ isReadyToSave, setReadyToSave ] = createSignal(true);
    const [ isASC, setASC ] = createSignal("asc");

    return (
        <VStack alignItems={"start"} p={"$3"} h={"$full"} gap={"$3"}>
            <HStack justifyContent={"space-between"} w={"$full"}>
                <Heading size={"2xl"}>
                    Patrons Management
                </Heading>
                <Switch>
                    <Match when={!isEditing()}>
                        <HStack gap={"$3"}>
                            <IconButton backgroundColor={"$accent11"} icon={ isLocked() ?  <FaSolidLock /> : <FaSolidLockOpen /> } />
                            <IconButton backgroundColor={"$accent11"} disabled={isLocked()} icon={<FaSolidPlus />} />
                            <Button backgroundColor={"$accent11"}>
                                Actions
                            </Button>
                        </HStack>
                    </Match>
                    <Match when={isEditing}>
                        <HStack gap={"$3"}>
                            <Button colorScheme={"danger"}>
                                Revert
                            </Button>
                            <Button colorScheme={"success"} disabled={!isReadyToSave()}>
                                Save
                            </Button>
                            <Button disabled>
                                Actions
                            </Button>
                        </HStack>
                    </Match>
                </Switch>
            </HStack>
            <HStack w={"$full"} flexGrow={"1"} gap={"$3"} fontSize={"14px"}>
                <VStack w="300px" h="$full" gap={"$3"}>
                    <HStack w={"$full"}>
                        <SimpleSelect backgroundColor={"white"} defaultValue={"name"} fontSize={"14px"} flexBasis={"40%"} borderTopRightRadius={"0"} borderBottomRightRadius={"0"}>
                            <SimpleOption value={"name"}>
                                Name
                            </SimpleOption>
                            <SimpleOption value={"number"}>
                                Number
                            </SimpleOption>
                        </SimpleSelect>
                        <Input backgroundColor={"white"} fontSize={"14px"} flexBasis={"60%"} borderTopLeftRadius={"0"} borderBottomLeftRadius={"0"} />
                    </HStack>
                    <VStack w={"$full"} flexGrow={"1"}>
                        <HStack w={"$full"} backgroundColor={"$accent11"}>
                            <SimpleSelect defaultValue={"modifiedDate"} border={"0"} color={"white"} borderRadius={"0"}>
                                <SimpleOption value="modifiedDate">
                                    Modified Date
                                </SimpleOption>
                            </SimpleSelect>
                            <IconButton borderRadius={"0"} onClick={() => setASC(!isASC())} background={"none"} _hover={{background: "none"}}>
                                { isASC() ? <AiOutlineSortAscending /> : <AiOutlineSortDescending /> }
                            </IconButton>
                        </HStack>
                        <VStack w={"$full"} flexGrow={"1"} backgroundColor={"white"} overflow={"auto"} h="727px">
                        <For each={data.results}>{(result) =>
                            <SearchResult result={result} />
                        }</For>
                        </VStack>
                    </VStack>
                </VStack>
                <VStack flex={"1"} h="$full" backgroundColor={"white"} p={"$3"}>
                    <HStack w={"$full"} justifyContent={"space-between"} gap={"$3"}>
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
                                    {data.info.stats.outs} 
                                </Text>
                            </VStack>
                            <VStack p={"$1"} borderBottomWidth={"1px"}>
                                <Text textTransform={"uppercase"}>
                                    Hold
                                </Text>
                                <Text>
                                    {data.info.stats.holds} 
                                </Text>
                            </VStack>
                            <VStack p={"$1"} borderRightWidth={"1px"}>
                                <Text textTransform={"uppercase"}>
                                    Suggestion
                                </Text>
                                <Text>
                                    {data.info.stats.suggestions} 
                                </Text>
                            </VStack>
                            <VStack p={"$1"}>
                                <Text textTransform={"uppercase"}>
                                    Last Use
                                </Text>
                                <Text>
                                    {data.info.stats.lastUse} 
                                </Text>
                            </VStack>
                        </SimpleGrid>
                    </HStack>
                    
                </VStack>
            </HStack>
        </VStack>
    )
}