import { HStack, Heading, Input, VStack } from "@hope-ui/solid";
import { useContext } from "solid-js";
import { CurrentPatronContext } from "../../../providers/CurrentPatron";

export default function Access() {

    const [state, { handleInput }] = useContext(CurrentPatronContext);

    return (
        <VStack w={"$full"} flexGrow={"1"} bgColor={"white"} fontSize={"14px"}  px={"$7"} py={"$5"} gap={"$3"}>
            <HStack gap={"$1"} alignItems={"start"} w={"$full"}>
                <VStack alignItems={"start"} gap={"$3"} w={"$full"}>
                    <Heading color={"$accent11"}>
                        Login
                    </Heading>
                    <VStack gap={"$1"} w={"$full"}>
                        <VStack alignItems={"start"} w={"$full"}>
                            <label for="username">
                                Username
                            </label>
                            <Input name="username" onInput={(e) => handleInput(e)} id="username" value={state.newPatron.username} />
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"}>
                            <label for="password">
                                Password
                            </label>
                            <Input name="password" onInput={(e) => handleInput(e)} id="password" value={state.newPatron.password} />
                        </VStack>
                        <VStack alignItems={"start"} w={"$full"}>
                            <label for="confirmPassword">
                                Confirm Password
                            </label>
                            <Input name="confirmPassword" onInput={(e) => handleInput(e)} id="confirmPassword" value={state.newPatron.confirmPassword} />
                        </VStack>
                    </VStack>
                </VStack>
            </HStack>
        </VStack>
    )
}