import { Route, Routes } from "@solidjs/router";
import Dashboard from "../pages/Dashboard";
import Circulation from "../pages/Circulation";
import Items from "../pages/Items";
import Patrons from "../pages/Patrons";

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
            <Route path="/patrons">
                <Route path="" element={<Patrons />} />
            </Route>
        </Routes>
    )
}