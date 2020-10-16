import React from 'react';
import cl from './Examples.module.css';
import style from '../common/styles/Container.module.css';
import Example from './Example/Example';


const Examples = () => {

    return(
        <div className={cl.examples_block}>
            <div className={`${cl.wrapper} ${style.container}`}>
                <h2 className={cl.title}>Examples</h2>
                <div className={cl.examples}>
                    <Example title={'HTML5'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    backgroundImage={'https://www.pvsm.ru/images/2019/08/01/opyt-perevoda-bolshogo-proekta-s-Flow-na-TypeScript-2.jpg'}/>
                    <Example title={'CSS3'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    backgroundImage={'https://www.pvsm.ru/images/2019/08/01/opyt-perevoda-bolshogo-proekta-s-Flow-na-TypeScript-2.jpg'}/>
                    <Example title={'JS'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    backgroundImage={'https://www.pvsm.ru/images/2019/08/01/opyt-perevoda-bolshogo-proekta-s-Flow-na-TypeScript-2.jpg'}/>
                    <Example title={'React'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                    backgroundImage={'https://www.pvsm.ru/images/2019/08/01/opyt-perevoda-bolshogo-proekta-s-Flow-na-TypeScript-2.jpg'}/>
                </div>
            </div>
        </div>
    );
}


export default Examples;