import { createContext, createEffect, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { InputValidationContext } from "./InputValidationProvider";
import { PatronEditingContext } from "./PatronEditingProvider";
import axios from "axios";
import { notificationService } from "@hope-ui/solid";

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
            firstName: null, 
            middleName: null, 
            lastName: null, 
            studentNumber: null, 
            library: null, 
            status: null, 
            policy: null, 
            birthDate: null, 
            sex: null, 
            homeroom: null, 
            secondLocation: null, 
            group: null, 
            graduationDate: null, 
            accountExpiration: null, 
            primaryEmail: null, 
            instituteEmail: null, 
            primaryPhone: null, 
            mobile: null, 
            messengers: null, 
            address1: null, 
            address2: null, 
            contactNotes: null, 
            username: null, 
            password: null, 
            confirmPassword: null, 
            generalNotes: null, 
            alertNotes: null, 
        }, 
        newPatron: {
            firstName: null, 
            middleName: null, 
            lastName: null, 
            studentNumber: null, 
            library: null, 
            status: null, 
            policy: null, 
            birthDate: null, 
            sex: null, 
            homeroom: null, 
            secondLocation: null, 
            group: null, 
            graduationDate: null, 
            accountExpiration: null, 
            primaryEmail: null, 
            instituteEmail: null, 
            primaryPhone: null, 
            mobile: null, 
            messengers: null, 
            address1: null, 
            address2: null, 
            contactNotes: null, 
            username: null, 
            password: null, 
            confirmPassword: null, 
            generalNotes: null, 
            alertNotes: null, 
        }, 
        isCurrentPatronNew: true, 
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
        axios.post("http://localhost:8080/api/patrons", {...state.newPatron})
        .then(response => {
            console.log(response);
            notificationService.show({
                status: "success", 
                title: "Patron updated!"
            });
            setState("currentPatron", state.newPatron);
        })
        .catch(error => {
            console.log(error);
            notificationService.show({
                status: "danger", 
                title: "Error!"
            })
        });
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

    const setPatrons = (patrons) => {
        setState("patrons", patrons);
    }

    const createNewPatron = () => {
        // setPatronSelected(true); 
        // setEditing(true);
        // setState("isCurrentPatronNew", true);
        // setState("currentPatron", {});
        // setState("newPatron", {});
    }

    const selectPatron = (patron) => {
        setPatronSelected(true);
        setEditing(true); 
        setState("isCurrentPatronNew", false); 
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
            setPatrons,  
            createNewPatron, 
            selectPatron, 
        }
    ]
    
    return (
        <CurrentPatronContext.Provider value={currentPatron}>
            {props.children}
        </CurrentPatronContext.Provider>
    )
}