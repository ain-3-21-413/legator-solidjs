import { createDisclosure } from "@hope-ui/solid";
import { createContext } from "solid-js";

export const SubFieldModalContext = createContext()
export default function SubFieldModalProvider(props){

    const { isOpen, onOpen, onClose } = createDisclosure()

    return(
        <SubFieldModalContext.Provider value={{isOpen, onOpen, onClose}}>
            {props.children}
        </SubFieldModalContext.Provider>
    )
}