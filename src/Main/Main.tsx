import React from 'react';
import cl from './Main.module.css';
import style from '../common/styles/Container.module.css'

const Main = () => {

    return (
        <div className={cl.main}>
            <div className={`${style.container} ${cl.wrapper}`}>
                <div className={cl.hello}>
                    <span>Hi There</span>
                    <h1>I'm Tymofii Stankevych</h1>
                    <div>Frontend developer</div>
                </div>
                <div className={cl.photo}></div>
            </div>
        </div>
    );
};

export default Main;