import React from 'react';
import cl from './Header.module.css';
import Nav from '../Nav/Nav';

const Header = () => {

    return (
        <div className={cl.header}>
            <Nav/>
        </div>
    );
};

export default Header;