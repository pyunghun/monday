import Header from "../components/Header";
import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom';
import Footer from "../components/Footer";

function Layout() {
    return(
        <>
            <Header/>
            <Navbar/>
            <hr/><hr/>
            <Outlet/>
            
        </>
    );
}

export default Layout;