import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CurrentPatronContext = createContext();

export default function CurrentPatronProvider(props) {

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
        newPatron: {}, 
    });

    const handleInput = (e) => {
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

    const currentPatron = [
        state, 
        {
            handleInput, 
            handleSave, 
            handleSelect, 
        }
    ]
    
    return (
        <CurrentPatronContext.Provider value={currentPatron}>
            {props.children}
        </CurrentPatronContext.Provider>
    )
}