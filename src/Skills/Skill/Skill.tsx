import React from 'react';
import cl from './Skill.module.css';

type PropsType = {
    title: string
    description: string
}

const Skill = (props: PropsType) => {

    return (
        <div className={cl.skill}>
            <div className={cl.icon}></div>
            <h3>{props.title}</h3>
            <span className={cl.description}>{props.description}</span>
        </div>
    );
};

export default Skill;