import React from "react"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


let divStyle = {
  margin: '0px',
  border: '10px solid orange',
  width: '30px', 
  height: '30px',
  position: 'absolute',
  left :'40px',
  top:'40px',
};

const pStyle = {
  textAlign: 'center'
};

export const Box = ({top,left}) => {
  // console.log("box redraw")

  let internalstyle = Object.assign({}, divStyle)

  internalstyle.left = left+"px";
  internalstyle.top = top+"px";

  console.log("left", left)
  console.log("top", top)


  return (
    
    <div className="App" style={internalstyle}>
      <p style={pStyle}>box</p>
    </div>
    )
  }

Box.propTypes = {
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  // console.log("box state wrapper", state)
  return {
    top: state.setMoveState.top,
    left: state.setMoveState.left
  };
}

export default connect(
  mapStateToProps,
)(Box);

