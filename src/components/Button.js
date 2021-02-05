import React from 'react';

export const Button = props => {
    return (
        <button className="button" style={{margin: "0 1px"}}onClick={props.function}>
            {props.content}
        </button>
    )
}