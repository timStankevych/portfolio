import React from 'react';
import cl from './Example.module.css';

type PropsType = {
    title: string
    description: string
    backgroundImage: string
}

const Example = (props: PropsType) => {

    return (
        <div className={cl.example}>
            <div style={{backgroundImage: `url(${props.backgroundImage})`}} className={cl.screen}>
                <div className={cl.link}><a href="#">SEE MORE...</a></div>
            </div>
            <h3>{props.title}</h3>
            <span className={cl.description}>{props.description}</span>
        </div>
    );
};

export default Example;