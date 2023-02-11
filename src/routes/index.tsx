import { Routes, Route } from "react-router-dom";

import { Layout } from "../components/Layout";
import { PrivateRoute } from "./privateRoute";

import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { Tenant } from "../pages/Tenant";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route element={<PrivateRoute />}>
                <Route path="/" element={<Layout />}>
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/tenant" element={<Tenant />} />
                </Route>
            </Route>
        </Routes>
    );
}
