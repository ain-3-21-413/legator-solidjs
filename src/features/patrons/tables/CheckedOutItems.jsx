import { Button, Table, Tbody, Td, Th, Thead, Tr, notificationService } from "@hope-ui/solid";
import axios from "axios";
import { For, createEffect, createSignal, useContext } from "solid-js";
import { CurrentPatronContext } from "../../../providers/CurrentPatron";
import useOpen from "../../../hooks/useOpen";

export default function CheckedOutItems() {

    const [state, { items, setItems, fetchItems, fetchArchivedItems, setArchiveItems }] = useContext(CurrentPatronContext);
    const [queryPath, setQueryPath] = createSignal(window.HOST_ADDRESS + "/patrons/" + state.currentPatron.studentNumber + "/items");
    createEffect(() => setQueryPath(window.HOST_ADDRESS + "/patrons/" + state.currentPatron.studentNumber + "/items"));
    createEffect(() => {fetchItems(queryPath());});

    const { open, openPatronTab } = useOpen();

    const checkInItem = async (checkedInItem) => {
        try {
            await axios.post(window.HOST_ADDRESS + "/circulation/check-in?item-id=" + checkedInItem.id);
            setItems((prevItems) => prevItems.filter((item) => item.id !== checkedInItem.id));
            notificationService.show({
                status: "success", 
                title: "Successfully checked in.", 
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Table dense highlightOnHover>
            <Thead>
                <Tr>
                    <Th>
                        Identifier
                    </Th>
                    <Th>
                        Title
                    </Th>
                    <Th>
                        Issued at
                    </Th>
                    <Th>
                        Due to
                    </Th>
                    <Th>
                        Actions
                    </Th>
                </Tr>
            </Thead>
            <Tbody>
                <For each={items()}>{(item) => 
                    <Tr>
                        <Td>
                            { item.id }
                        </Td>
                        <Td>
                            { item["245-a"] } ({ item["id"] }) by { item["100-a"] }
                        </Td>
                        <Td>
                            { item.issuedAt }
                        </Td>
                        <Td>
                            { item.dueTo }
                        </Td>
                        <Td>
                            <Button size={"sm"} onClick={() => {checkInItem(item)}}>
                                Check in
                            </Button>
                        </Td>
                    </Tr>
                }</For>
            </Tbody>
        </Table>
    )
}