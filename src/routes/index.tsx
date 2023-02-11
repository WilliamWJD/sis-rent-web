import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { PrivateRoute } from "./privateRoute";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route element={<PrivateRoute />}>
                <Route path="/dashboard" element={<Layout />}>
                    <Route path="/dashboard" element={<Home />} />
                </Route>
            </Route>
        </Routes>
    );
}
