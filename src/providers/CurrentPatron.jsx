import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CurrentPatronContext = createContext();

export default function CurrentPatronProvider(props) {

    const [state, setState] = createStore({
        currentPatron: {
            stats: {
                outs: 2,
                holds: 1,
                suggestions: 1,
                lastUse: "01/01/2023",
            }
        }
    });

    const currentPatron = [
        state, 
        {

        }
    ]
    
    return (
        <CurrentPatronContext.Provider value={currentPatron}>
            {props.children}
        </CurrentPatronContext.Provider>
    )
}