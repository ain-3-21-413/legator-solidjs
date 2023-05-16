import { useNavigate } from "@solidjs/router";
import { useContext } from "solid-js";
import { CurrentPageContext } from "../providers/CurrentPageProvider";

export default function useOpen() {

    const navigate = useNavigate();

    const [state, { setCurrentPage, setCurrentPatronTab } ] = useContext(CurrentPageContext);

    const open = (path) => {
        navigate(path);
        setCurrentPage(path);
    }

    const openPatronTab = (tab) => {
        navigate(tab);
        setCurrentPatronTab(tab);
        console.log(state.currentPatronTab);
    }

    return (
        { open, openPatronTab }
    )
}