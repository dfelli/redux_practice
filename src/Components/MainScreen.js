import React from 'react';
import Box from './Box.js'
import {connect} from 'react-redux';
import {move} from '../Actions/move.js';
import PaintBox from './PaintBox.js';
import PropTypes from 'prop-types';

let fullscreen ={
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: "auto",
  background: "lime", /* Just to visualize the extent */  
}

function MainScreen({mover, backgroundColor}) {

  console.log("screen redraw")

  let internalstyle = Object.assign({}, fullscreen)
  internalstyle.background= backgroundColor

  return (
    <div className="App" style={internalstyle} tabIndex="0" onKeyDown={(event) => mover(event.key)}>
        <Box />
        <PaintBox originalColor={"green"} startTop={100} startLeft={100}/>
        <PaintBox originalColor={"black"} startTop={200} startLeft={100}/>
        <PaintBox originalColor={"purple"} startTop={300} startLeft={100}/>
        <PaintBox originalColor={"yellow"} startTop={400} startLeft={100}/>
        <PaintBox originalColor={"blue"} startTop={100} startLeft={300}/>
        <PaintBox originalColor={"green"} startTop={100} startLeft={550}/>
        <PaintBox originalColor={"black"} startTop={200} startLeft={560}/>
        <PaintBox originalColor={"purple"} startTop={300} startLeft={570}/>
        <PaintBox originalColor={"yellow"} startTop={400} startLeft={580}/>
        <PaintBox originalColor={"orange"} startTop={100} startLeft={400}/>
    </div>
  );
}

MainScreen.propTypes = {
  mover: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  // console.log("mainscreen state wrapper", state)
  return {
    backgroundColor: state.paint.color,
  };
}

const mapDispatchToProps = { mover: move };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainScreen);
