import React from 'react';
import './Person.css'

const Person = (props) => {
    return(
                    <div className='Person'>
                        <h3>{props.name}</h3>
                        <h4>{props.age}</h4> 
                        <input  value={props.name} onChange={ (event) => {props.changeHandler(event,props.index)}} />
                    </div>
     
    );
}

export default Person;



