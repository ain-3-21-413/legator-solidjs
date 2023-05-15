import { useNavigate } from "@solidjs/router";
import { useContext } from "solid-js";
import { CurrentPageContext } from "../providers/CurrentPageProvider";

export default function useOpen() {

    const navigate = useNavigate();

    const [state, { setCurrentPage } ] = useContext(CurrentPageContext);

    const open = (path) => {
        navigate(path);
        setCurrentPage(path);
    }

    return (
        { open }
    )
}