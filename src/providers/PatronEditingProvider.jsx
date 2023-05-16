import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const PatronEditingContext = createContext();

export default function PatronEditingProvider(props) {

    const [state, setState] = createStore({
        isLocked: true,
        isEditing: true,
        isReadyToSave: false,
        isASC: true, 
    });

    const patronEditing = [
        state, 
        {
            setLocked(isLocked) {
                setState("isLocked", isLocked);
            },
            setEditing(isEditing) {
                setState("isEditing", isEditing);
            },
            setReadyToSave(isReadyToSave) {
                setState("isReadyToSave", isReadyToSave);
            },
            setASC(isASC) {
                setState("isASC", isASC);
            }
        }
    ]

    return (
        <PatronEditingContext.Provider value={patronEditing}>
            {props.children}
        </PatronEditingContext.Provider>
    )
}