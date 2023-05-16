import { HStack, VStack } from "@hope-ui/solid";
import Header from "../features/patrons/Header";
import Sidebar from "../features/patrons/Sidebar";
import PatronCard from "../features/patrons/PatronCard";

export default function Patrons() {

    return (
        <VStack alignItems={"start"} p={"$3"} h={"$full"} gap={"$3"}>
            <Header />
            <HStack w={"$full"} flexGrow={"1"} gap={"$3"} fontSize={"14px"}>
                <Sidebar />
                <VStack flex={"1"} h="$full">
                    <PatronCard />
                </VStack>
            </HStack>
        </VStack>
    )
}