import React from 'react';

const Shape = (props) => {
  var shape = props.shape;
  var selectShape = props.selectShape;

  return (              //anonymous function only fires when we click
    <div className={shape} onClick={() => selectShape(shape)} />
  )
};

export default Shape;
