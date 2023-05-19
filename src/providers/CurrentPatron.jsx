import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CurrentPatronContext = createContext();

export default function CurrentPatronProvider(props) {

    const [state, setState] = createStore({
        currentPatron: {
            firstName: "", 
            middleName: "", 
            lastName: "", 
            barcode: "", 
            site: "", 
            status: "", 
            policy: "", 
            studentNumber: "", 
            birthDate: "", 
            sex: "", 
            nickname: "", 
            homeroom: "", 
            secondLocation: "", 
            group: "", 
            graduationDate: "", 
            accountExpiration: "", 
            suspensionDate: "", 
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
        }
    });

    const handleInput = (e) => {
        setState([e.currentTarget.name], e.currentTarget.value);
    }

    const handleSave = () => {
        console.log(state);
    }

    const currentPatron = [
        state, 
        {
            handleInput, 
            handleSave, 
        }
    ]
    
    return (
        <CurrentPatronContext.Provider value={currentPatron}>
            {props.children}
        </CurrentPatronContext.Provider>
    )
}