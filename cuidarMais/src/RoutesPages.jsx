import { Route, Routes } from "react-router-dom"; //
import TelaPareamento from "./pages/telaPareamento"; //
import Home from "./pages/home"; //
import SearchPage from "./pages/SearchPage"; //
import NotificationsPage from "./pages/NotificationsPage"; //
import ProfilePage from "./pages/ProfilePage"; //

export default function RoutesPages() {
    return (
        <Routes>
            <Route path='/' element={<Espera />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pareamento' element={<TelaPareamento />} />
            <Route path='/home' element={<Home />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/notificacoes' element={<NotificationsPage />} />
            <Route path='/perfil' element={<ProfilePage />} />
        </Routes>
    )
}