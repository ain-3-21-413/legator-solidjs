import { HStack, VStack } from "@hope-ui/solid";
import Header from "../features/patrons/Header";
import Sidebar from "../features/patrons/Sidebar";
import PatronCard from "../features/patrons/PatronCard";
import { Match, Switch, useContext } from "solid-js";
import { PatronEditingContext } from "../providers/PatronEditingProvider";
import PatronPageIntro from "../features/patrons/patronPageIntro/PatronPageIntro";

export default function Patrons() {

    const [state] = useContext(PatronEditingContext);

    return (
        <VStack alignItems={"start"} p={"$3"} h={"$full"} gap={"$3"}>
            <Header />
            <HStack w={"$full"} flexGrow={"1"} gap={"$3"} fontSize={"14px"}>
                <Sidebar />
                <VStack flex={"1"} h="$full">
                    <Switch>
                        <Match when={state.isPatronSelected}>
                            <PatronCard />
                        </Match>
                        <Match when={!state.isPatronSelected}>
                            <PatronPageIntro />
                        </Match>
                    </Switch>
                </VStack>
            </HStack>
        </VStack>
    )
}