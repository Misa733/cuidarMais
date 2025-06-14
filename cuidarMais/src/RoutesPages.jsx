import { Route, Routes } from "react-router-dom";
import TelaPareamento from "./pages/telaPareamento";
import Home from "./pages/home";

export default function RoutesPages() {


    return (
        <Routes>
            <Route path='/' element={<TelaPareamento />} exact />
            <Route path='/Home' element={<Home />} />
        </Routes>
    )
}