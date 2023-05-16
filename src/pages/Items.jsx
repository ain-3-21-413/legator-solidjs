import { HStack, VStack } from "@hope-ui/solid";
import Header from "../features/items/Header";
import Sidebar from "../features/items/Sidebar";
import ItemCard from "../features/items/ItemCard";

export default function Items() {

    return (
        <VStack alignItems={"start"} p={"$3"} h={"$full"} gap={"$3"}>
            <Header />
            <HStack w={"$full"} flexGrow={"1"} gap={"$3"} fontSize={"14px"}>
                <Sidebar />
                <VStack flex={"1"} h="$full">
                    <ItemCard />
                </VStack>
            </HStack>
        </VStack>
    )
}