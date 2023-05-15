import { Text, VStack } from "@hope-ui/solid";

export default function SearchResult(props) {

    return (
        <VStack w="$full" alignItems={"start"} p="$3" _hover={{backgroundColor: "$blackAlpha5"}}>
            <Text fontSize={"12px"}>
                {props.result.date}
            </Text>
            <Text>
                {props.result.name}
            </Text>
        </VStack>
    )
}