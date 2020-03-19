'use strict';

(function () {
  
  
let setMoveElement =  function () {
  
  let elem = document.querySelector('.card');


  

  let BorderLimits = {
    X: {MIN: 50, MAX: 1000},
    Y: {MIN: 50, MAX: 200}
  };



  elem.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let onMouseMove = function (evtMove) {
      evtMove.preventDefault();

      let shift = {
        x: startCoords.x - evtMove.clientX,
        y: startCoords.y - evtMove.clientY
      };

      startCoords = {
        x: evtMove.clientX,
        y: evtMove.clientY
      };

      var newCoords = {
        x: elem.offsetLeft - shift.x,
        y: elem.offsetTop - shift.y
      };

      let checkCoords = function (coords) {
        

        if (coords.x < BorderLimits.X.MIN) {
          coords.x = BorderLimits.X.MIN;
        }

        if (coords.x > BorderLimits.X.MAX) {
          coords.x = BorderLimits.X.MAX;
        }

        if (coords.y < BorderLimits.Y.MIN) {
          coords.y = BorderLimits.Y.MIN;
        }

        if (coords.y > BorderLimits.Y.MAX) {
          coords.y = BorderLimits.Y.MAX;
        }
        return coords;
      };

      newCoords = checkCoords(newCoords);
      
      elem.style.left = newCoords.x + 'px';
      elem.style.top = newCoords.y + 'px';
      
      
    };

    let onMouseUp = function (evtUp) {
      evtUp.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
};

setMoveElement();


})();