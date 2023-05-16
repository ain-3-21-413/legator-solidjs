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

export default function AppRouter() {

    return (
        <Routes>
            <Route path="/">
                <Route path="" element={<Dashboard />} />
            </Route>
            <Route path="/circulation">
                <Route path="" element={<Circulation />} />
            </Route>
            <Route path="/items">
                <Route path="" element={<Items />} />
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