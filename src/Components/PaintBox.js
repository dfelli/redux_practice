import React from 'react';
import {connect} from 'react-redux';
import {paint} from '../Actions/paint.js';
import PropTypes from 'prop-types';

const selfTop = 200
const selfLeft = 200

let divStyle = {
  margin: '0px',
  border: '10px solid blue',
  width: '30px', 
  height: '30px',
  position: 'absolute',
  top :selfTop+'px',
  left:selfLeft+'px',
};

const pStyle = {
  textAlign: 'center'
};

function handleOverlap(painter,top, left, originalColor, startTop, startLeft){
  console.log("painting")

  if(left >= startLeft-50 && left <= startLeft + 50 && top >= startTop-50 && top <= startTop + 50){
    painter(originalColor)
  }
}

function PaintBox({painter,top,left, originalColor, startTop, startLeft}) {

  console.log("paint redraw")

  handleOverlap(painter, top, left, originalColor, startTop, startLeft)

  let internalstyle = Object.assign({}, divStyle)
  internalstyle.border= '10px solid '+ originalColor
  internalstyle.top = startTop
  internalstyle.left =startLeft

  return (
    <div className="App" style={internalstyle}>
      <p style={pStyle}>box</p>
    </div>
  );
}

PaintBox.propTypes = {
  painter: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  console.log("paint state wrapper", state)
  return {
    top: state.setMoveState.top,
    left: state.setMoveState.left,
    //color: state.paint.color,
  };
}

const mapDispatchToProps = { painter: paint };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PaintBox);
