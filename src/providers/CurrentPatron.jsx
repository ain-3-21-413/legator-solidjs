import { createContext, onMount, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { InputValidationContext } from "./InputValidationProvider";

export const CurrentPatronContext = createContext();

export default function CurrentPatronProvider(props) {

    const [inputValidationState, { validateInput }] = useContext(InputValidationContext);

    onMount(() => {
        validateInput("firstName", state.newPatron.firstName);
        validateInput("lastName", state.newPatron.lastName);
        validateInput("studentNumber", state.newPatron.studentNumber);
    })

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
            firstName: "firstName", 
            middleName: "middleName", 
            lastName: "lastName", 
            studentNumber: "studentNumber", 
        }, 
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

    const currentPatron = [
        state, 
        {
            handleInput, 
            handleSave, 
            handleSelect, 
            revert, 
        }
    ]
    
    return (
        <CurrentPatronContext.Provider value={currentPatron}>
            {props.children}
        </CurrentPatronContext.Provider>
    )
}