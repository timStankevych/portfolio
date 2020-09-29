import React from 'react';
import cl from './Nav.module.css';
import style from '../common/styles/Container.module.css'

const Nav = () => {

    return (
        <div className={`${style.container} ${cl.wrapper}`}>
            <div className={cl.nav}>
                <a href="#">Main</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contacts</a>
            </div>
        </div>
    );
};

export default Nav;