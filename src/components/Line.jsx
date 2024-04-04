import React from 'react';

const Line = ({ x1, y1, x2, y2 }) => {
    // Calculate the distance between start and end points along x and y axes
    const dx = x2 - x1;
    const dy = y2 - y1;

    // Calculate the length of the line
    const length = Math.sqrt(dx ** 2 + dy ** 2);

    // Calculate the angle of rotation for the line
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);

    // Calculate the position of the line
    const positionStyle = {
        position: 'absolute',
        left: `${x1}px`,
        top: `${y1}px`,
        width: `${length}px`,
        transformOrigin: '0 0', // Set the transform origin to the start point of the line
        transform: `rotate(${angle}deg)`,
        borderBottom: '1px solid black',
        zIndex: 0
    };

    return <div style={positionStyle}></div>;
};

export default Line;

