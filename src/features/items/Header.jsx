import { Button, HStack, Heading, IconButton } from "@hope-ui/solid";
import { FaSolidLock, FaSolidLockOpen, FaSolidPlus } from "solid-icons/fa";
import { Match, Switch, useContext } from "solid-js";
import { ItemEditingContext } from "../../providers/ItemEditingProvider";
import { CurrentBookContext } from "../../providers/CurrentBook";

export default function Header() {

    const [state] = useContext(ItemEditingContext);
    const { handleSave, areFieldsValid } = useContext(CurrentBookContext);

    return (
        <HStack justifyContent={"space-between"} w={"$full"}>
            <Heading size={"2xl"}>
                Items Management
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
                        <Button colorScheme={"success"} onClick={handleSave} disabled={areFieldsValid()}>
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