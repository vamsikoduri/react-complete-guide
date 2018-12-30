import React from 'react';
import classStyles from './Person.css'

const Person = (props) => {
    let rand = Math.random();

    if( rand >0.5)
    {
        throw new Error(" random values it not correct");
    }

    return(
                    <div className={classStyles.Person}>
                        <h3>{props.name}</h3>
                        <h4>{props.age}</h4> 
                        <input  value={props.name} onChange={ (event) => {props.changeHandler(event,props.index)}} />
                    </div>
     
    );
}

export default Person;



