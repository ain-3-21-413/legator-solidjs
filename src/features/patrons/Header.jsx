import { Button, HStack, Heading, IconButton } from "@hope-ui/solid";
import { Match, useContext } from "solid-js";
import { Switch } from "solid-js";
import { PatronEditingContext } from "../../providers/PatronEditingProvider";
import { FaSolidLock, FaSolidLockOpen, FaSolidPlus } from "solid-icons/fa";

export default function Header() {

    const [state] = useContext(PatronEditingContext);

    return (
        <HStack justifyContent={"space-between"} w={"$full"}>
                <Heading size={"2xl"}>
                    Patrons Management
                </Heading>
                <Switch>
                    <Match when={!state.isEditing}>
                        <HStack gap={"$3"}>
                            <IconButton backgroundColor={"$accent11"} icon={ state.isLocked ?  <FaSolidLock /> : <FaSolidLockOpen /> } />
                            <IconButton backgroundColor={"$accent11"} disabled={state.isLocked} icon={<FaSolidPlus />} />
                            <Button backgroundColor={"$accent11"}>
                                Actions
                            </Button>
                        </HStack>
                    </Match>
                    <Match when={state.isEditing}>
                        <HStack gap={"$3"}>
                            <Button colorScheme={"danger"}>
                                Revert
                            </Button>
                            <Button colorScheme={"success"} disabled={!state.isReadyToSave}>
                                Save
                            </Button>
                            <Button disabled>
                                Actions
                            </Button>
                        </HStack>
                    </Match>
                </Switch>
            </HStack>
    )
}