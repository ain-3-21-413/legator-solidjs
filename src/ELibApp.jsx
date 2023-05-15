import { Box, Stack } from "@hope-ui/solid";
import Navbar from "./features/Navbar";
import Header from "./features/Header";
import AppRouter from "./router";

export default function ELibApp() {

    return (
        <Stack h="$screenH" w="$screenW" bgColor={"$blackAlpha4"} direction={"row"}>
            <Navbar />
            <Box display={"flex"} flexDirection={"column"} h="$full" flex={"1"}>
                <Header />
                <Box flexGrow={"1"}>
                    <AppRouter />
                </Box>
            </Box>
        </Stack>
    )
}