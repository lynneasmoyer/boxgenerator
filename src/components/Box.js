import React from 'react';

const Box = (props) => {
    const style = {
        backgroundColor: props.color,
        height: "200px",
    }
    return(
        <div style={style} className="col-2"></div>
    );
}

export default Box;