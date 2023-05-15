import { Stack } from "@hope-ui/solid";
import Navbar from "./features/Navbar";

export default function ELibApp() {

    return (
        <Stack h="$screenH" w="$screenW" bgColor={"$blackAlpha4"} direction={"row"}>
            <Navbar />
        </Stack>
    )
}