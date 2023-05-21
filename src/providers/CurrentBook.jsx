import { createContext, createSignal } from "solid-js";
import { createStore } from "solid-js/store";

export const CurrentBookContext = createContext()

export default function CurrentBookProvider(props) {

    const [signals, setSignals] = createSignal({});
    const [fieldsValidation, setFieldsValidation] = createStore({
        "000-00": true, 
        "003-00": true, 
        "005-00": true, 
        "008-00": true, 
        "245-a": true, 
    });

    const validateInput = (name, value) => {
        setFieldsValidation(name, value == "");
    }
    
    const areFieldsValid = () => {
        return (
            fieldsValidation["000-00"] ||
            fieldsValidation["003-00"] ||
            fieldsValidation["005-00"] ||
            fieldsValidation["008-00"] ||
            fieldsValidation["245-a"]
        )
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        
        validateInput(name, value);
        
        setSignals((prevSignals) => ({
            ...prevSignals, 
            [name]: value, 
        }));
    }

    const handleSave = () => {
        console.log(signals());
    }

    const currentBookState = {
        signals, 
        handleInput, 
        handleSave, 
        fieldsValidation, 
        areFieldsValid, 
    }

    return (
        <CurrentBookContext.Provider value={currentBookState}>
            {props.children}
        </CurrentBookContext.Provider>
    )
}