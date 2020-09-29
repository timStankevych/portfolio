import React from 'react';
import cl from './Skills.module.css';
import style from '../common/styles/Container.module.css';
import Skill from './Skill/Skill';

const Skills = () => {

    return (
        <div className={cl.skills_block}>
            <div className={`${cl.wrapper} ${style.container}`}>
                <h2 className={cl.title}>Skills</h2>
                <div className={cl.skills}>
                    <Skill title={'HTML5'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deleniti, mollitia!'}/>
                    <Skill title={'CSS3'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deleniti, mollitia!'}/>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deleniti, mollitia!'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi deleniti, mollitia!'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;