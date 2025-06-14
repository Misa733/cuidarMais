
import { BrowserRouter } from 'react-router-dom';
import Navbar from './NavBar';
import RoutesPages from '../RoutesPages';

export default function Layout() {


    return (

        <>
            <BrowserRouter>
                <RoutesPages />
                <Navbar />
            </BrowserRouter>
        </>


    )
}