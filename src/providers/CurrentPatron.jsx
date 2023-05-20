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
            library: "", 
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
        setState("currentPatron", e.currentTarget.name, e.currentTarget.value);
    }

    const handleSelect = (name, value) => {
        setState("currentPatron", name, value);
        // console.log("currentPatron", name, value);
    }

    const handleSave = () => {
        console.log({
            firstName: state.currentPatron.firstName, 
            middleName: state.currentPatron.middleName, 
            lastName: state.currentPatron.lastName, 
            barcode: state.currentPatron.barcode, 
            library: state.currentPatron.library, 
            status: state.currentPatron.status, 
            policy: state.currentPatron.policy, 
            studentNumber: state.currentPatron.studentNumber, 
            birthDate: state.currentPatron.birthDate, 
            sex: state.currentPatron.sex, 
            nickname: state.currentPatron.nickname, 
            homeroom: state.currentPatron.homeroom, 
            secondLocation: state.currentPatron.secondLocation, 
            group: state.currentPatron.group, 
            graduationDate: state.currentPatron.graduationDate, 
            accountExpiration: state.currentPatron.accountExpiration, 
            primaryEmail: state.currentPatron.primaryEmail, 
            instituteEmail: state.currentPatron.instituteEmail, 
            primaryPhone: state.currentPatron.primaryPhone, 
            mobile: state.currentPatron.mobile, 
            messengers: state.currentPatron.messengers, 
            address1: state.currentPatron.address1, 
            address2: state.currentPatron.address2, 
            contactNotes: state.currentPatron.contactNotes, 
            username: state.currentPatron.username, 
            password: state.currentPatron.password, 
            confirmPassword: state.currentPatron.confirmPassword, 
            generalNotes: state.currentPatron.generalNotes, 
            alertNotes: state.currentPatron.alertNotes, 
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