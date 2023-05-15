import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CurrentPageContext = createContext();

export default function CurrentPageProvider(props) {

    const currentRoute = window.location.pathname;
    const parts = currentRoute.split('/').filter(Boolean); // Split the pathname by '/' and remove empty elements
    const desiredPart = (parts.length > 0) ? ('/' + parts[0]) : '/';

    const [state, setState] = createStore({
        currentPage: desiredPart,
    });

    const currentPage = [
        state, 
        {
            setCurrentPage(page) {
                setState("currentPage", page);
            }
        }
    ]

    return (
        <CurrentPageContext.Provider value={currentPage}>
            {props.children}
        </CurrentPageContext.Provider>
    )
}