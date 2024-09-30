import React, { ReactNode, useState } from 'react';
import { Navigation20Regular } from '@fluentui/react-icons';
import './AppLayout.css';
import { makeStyles } from "@fluentui/react-make-styles";


const iconStyleProps: FluentIconsProps = {
    primaryFill: "#217346",
    className: "iconClass"
};

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    const [isCollapsed, setIsCollapsed] = useState(false); // State to manage the collapse

    const toggleNav = () => {
        setIsCollapsed(prevState => !prevState)
    }; // Toggle collapse state


    return (
        <div className="layout">

            <div className="first-Container">

                <span style={{ fontFamily: 'Nunito',
                      fontWeight: 'bold',
                      fontSize: '18px',
                      color: '#217346' }}>
                    E-wallet Issue tracker
                </span>

            </div>

            <div className="second-Container">

                <div className={`side-nav ${isCollapsed ? 'collapsed' : ''}`}>

                    <div onClick={toggleNav} className={`${isCollapsed ? 'nav-collapsed' : 'nav'}`}>
                        <Navigation20Regular {...iconStyleProps}  />
                    </div>
                </div>

                <main className="main-content">{children}</main>

            </div>
        </div>
    );
};

export default Layout;