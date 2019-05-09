

export const move = (keyTitle) => {
  //console.log("action move")
  let deltaTop = 0
  let deltaLeft = 0
  const moveAmount = 30;

  switch (keyTitle) {
      case 'ArrowDown':
        deltaTop = moveAmount
        break
      case 'ArrowUp':
        deltaTop = -moveAmount
        break
      case 'ArrowLeft':
        deltaLeft = -moveAmount
        break
      case 'ArrowRight':
        deltaLeft = moveAmount
        break
      default:
        return {type: 'NOTHING'} //is there a way to bypass the reducer being called without filtering a call to the action?
  }

  return {
    type: 'MOVE',
    payload : {deltaTop:deltaTop, deltaLeft:deltaLeft},
  }
};

