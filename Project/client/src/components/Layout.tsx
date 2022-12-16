import React, {FC, ReactNode} from "react";
import {useLocation} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {

    children: ReactNode
}


const Layout:FC<LayoutProps> = ({children}) => {

    const location = useLocation();

    return <React.Fragment>

        {
            location.pathname==='/login' || location.pathname==='/registration'?null:<Header/>
        }
        {children}
        {
            location.pathname==='/login'|| location.pathname==='/registration'?null:<Footer/>
        }

    </React.Fragment>
}

export default Layout