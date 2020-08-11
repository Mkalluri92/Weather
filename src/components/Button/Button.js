import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.clicked} disabled={props.disableClick}>Submit</button>
    )
}

export default Button;