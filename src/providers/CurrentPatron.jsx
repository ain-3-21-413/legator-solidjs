import { createContext, createEffect, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { InputValidationContext } from "./InputValidationProvider";
import { PatronEditingContext } from "./PatronEditingProvider";

export const CurrentPatronContext = createContext();

export default function CurrentPatronProvider(props) {

    const [inputValidationState, { isInputValid, validateInput }] = useContext(InputValidationContext);
    const [patronEditingState, { setEditing, setReadyToSave, setPatronSelected }] = useContext(PatronEditingContext);

    createEffect(() => {
        validateInput("firstName", state.newPatron.firstName);
        validateInput("lastName", state.newPatron.lastName);
        validateInput("studentNumber", state.newPatron.studentNumber);
        setReadyToSave(
            isInputValid("firstName") && 
            isInputValid("lastName") && 
            isInputValid("studentNumber") &&
            checkIfReadyToSave()
        );
    });

    const checkIfReadyToSave = () => {
        for (let prop in state.currentPatron) {
            if (state.currentPatron.hasOwnProperty(prop)) {
                if (state.currentPatron[prop] !== state.newPatron[prop]) {
                    return true;
                }
            }
        } 
        return false;
    }

    createEffect(() => {
        // setReadyToSave(checkIfReadyToSave());
    });

    const [state, setState] = createStore({
        currentPatron: {
            firstName: "", 
            middleName: "", 
            lastName: "", 
            studentNumber: "", 
            library: "", 
            status: "", 
            policy: "", 
            birthDate: "", 
            sex: "", 
            homeroom: "", 
            secondLocation: "", 
            group: "", 
            graduationDate: "", 
            accountExpiration: "", 
            primaryEmail: "", 
            instituteEmail: "", 
            primaryPhone: "", 
            mobile: "", 
            messengers: "", 
            address1: "", 
            address2: "", 
            contactNotes: "", 
            username: "", 
            password: "", 
            confirmPassword: "", 
            generalNotes: "", 
            alertNotes: "", 
        }, 
        newPatron: {
            firstName: "", 
            middleName: "", 
            lastName: "", 
            studentNumber: "", 
            library: "", 
            status: "", 
            policy: "", 
            birthDate: "", 
            sex: "", 
            homeroom: "", 
            secondLocation: "", 
            group: "", 
            graduationDate: "", 
            accountExpiration: "", 
            primaryEmail: "", 
            instituteEmail: "", 
            primaryPhone: "", 
            mobile: "", 
            messengers: "", 
            address1: "", 
            address2: "", 
            contactNotes: "", 
            username: "", 
            password: "", 
            confirmPassword: "", 
            generalNotes: "", 
            alertNotes: "", 
        }, 
        patrons: [], 
    });

    const handleInput = (e) => {
        validateInput(e.currentTarget.name, e.currentTarget.value);
        setState("newPatron", e.currentTarget.name, e.currentTarget.value);
    }

    const handleSelect = (name, value) => {
        setState("newPatron", name, value);
    }

    const handleSave = () => {
        console.log({
            ...state.newPatron
        });
    }

    const revert = () => {
        for (let prop in state.currentPatron) {
            setState("newPatron", prop, state.currentPatron[prop]);
        }
    }

    const addPatron = (patron) => {
        setState("patrons", [...state.patrons, patron]);
    }

    const selectPatron = (patron) => {
        setPatronSelected(true);
        setState("currentPatron", patron);
        setState("newPatron", patron);
    }

    const currentPatron = [
        state, 
        {
            handleInput, 
            handleSave, 
            handleSelect, 
            revert, 
            addPatron, 
            selectPatron, 
        }
    ]
    
    return (
        <CurrentPatronContext.Provider value={currentPatron}>
            {props.children}
        </CurrentPatronContext.Provider>
    )
}