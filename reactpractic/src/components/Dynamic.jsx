import React from 'react';

const Dynamic = (props) => {
    return(
        <div>
            <h1 style={{backgroundColor: props.bgcolor, color: props.tcolor}}>Word is: {props.string}</h1>
        </div>
    )
}
export default Dynamic