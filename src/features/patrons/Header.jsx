import { Button, HStack, Heading, IconButton } from "@hope-ui/solid";
import { Match, useContext } from "solid-js";
import { Switch } from "solid-js";
import { PatronEditingContext } from "../../providers/PatronEditingProvider";
import { FaSolidLock, FaSolidLockOpen, FaSolidPlus } from "solid-icons/fa";
import useOpen from "../../hooks/useOpen";
import { CurrentPatronContext } from "../../providers/CurrentPatron";

export default function Header() {

    const [state, { setLocked, setPatronSelected, setEditing }] = useContext(PatronEditingContext);

    const { open, openPatronTab } = useOpen();

    const [ currentPatronState, { handleSave }] = useContext(CurrentPatronContext);

    return (
        <HStack justifyContent={"space-between"} w={"$full"}>
            <Heading size={"2xl"}>
                Patrons Management
            </Heading>
            <Switch>
                <Match when={!state.isEditing}>
                    <HStack gap={"$3"}>
                        <IconButton onClick={() => setLocked(!state.isLocked)} backgroundColor={"$accent11"} icon={ state.isLocked ?  <FaSolidLock /> : <FaSolidLockOpen /> } />
                        <IconButton 
                            backgroundColor={"$accent11"} 
                            disabled={state.isLocked} icon={<FaSolidPlus />} 
                            onClick={() => {open("/patrons"); openPatronTab("personal"); setPatronSelected(true); setEditing(true)}}
                        />
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
                        <Button colorScheme={"success"} disabled={!state.isReadyToSave} onClick={handleSave}>
                            Save
                        </Button>
                        <Button disabled={!state.isReadyToSave}>
                            Actions
                        </Button>
                    </HStack>
                </Match>
            </Switch>
        </HStack>
    )
}