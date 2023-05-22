import { Route, Routes } from "@solidjs/router";
import Dashboard from "../pages/Dashboard";
import Circulation from "../pages/Circulation";
import Items from "../pages/Items";
import Patrons from "../pages/Patrons";
import Personal from "../features/patrons/tabs/Personal";
import Contact from "../features/patrons/tabs/Contact";
import Access from "../features/patrons/tabs/Access";
import Notes from "../features/patrons/tabs/Notes";
import Statistics from "../features/patrons/tabs/Statistics";
import One from "../features/items/tabs/One";
import Two from "../features/items/tabs/Two";
import Three from "../features/items/tabs/Three";
import Four from "../features/items/tabs/Four";
import Five from "../features/items/tabs/Five";
import Six from "../features/items/tabs/Six";
import Seven from "../features/items/tabs/Seven";
import Zero from "../features/items/tabs/Zero";

export default function AppRouter() {

    window.HOST_ADDRESS = "http://192.168.0.104:8080/api";

    return (
        <Routes>
            <Route path="/">
                <Route path="" element={<Dashboard />} />
            </Route>
            <Route path="/circulation">
                <Route path="" element={<Circulation />} />
            </Route>
            <Route path="/items" element={<Items />}>
                <Route path="" element={<Zero />} />
                <Route path="0" element={<Zero />} />
                <Route path="1" element={<One />} />
                <Route path="2" element={<Two />} />
                <Route path="3" element={<Three />} />
                <Route path="4" element={<Four />} />
                <Route path="5" element={<Five />} />
                <Route path="6" element={<Six />} />
                <Route path="7" element={<Seven />} />
            </Route>
            <Route path="/patrons" element={<Patrons />}>
                <Route path="" element={<Personal />} />
                <Route path="personal" element={<Personal />} />
                <Route path="contact" element={<Contact />} />
                <Route path="access" element={<Access />} />
                <Route path="notes" element={<Notes />} />
                <Route path="statistics" element={<Statistics />} />
            </Route>
        </Routes>
    )
}