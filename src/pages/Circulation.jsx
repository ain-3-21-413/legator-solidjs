import { HStack, Heading, Input, SimpleOption, SimpleSelect, VStack } from "@hope-ui/solid";

export default function Circulation() {

    return (
        <VStack flexGrow={"1"} w={"$full"} alignItems={"start"}>
            <Heading size={"2xl"} p={"$3"}>
                Circulation
            </Heading>
            <HStack w={"$full"} p={"$3"} pt={"0"} gap={"$1"}>
                <SimpleSelect w={"40%"} placeholder="Select" backgroundColor={"white"}>
                    <SimpleOption value={"CHECK_OUT"}>
                        Check out
                    </SimpleOption>
                    <SimpleOption value={"CHECK_IN"}>
                        Check in
                    </SimpleOption>
                </SimpleSelect>
                <Input />
            </HStack>
        </VStack>
    )
}