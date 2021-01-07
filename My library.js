function isTouching(movingObject,fixedObject){
    if (movingObject.x - fixedObject.x < fixedObject.width/2 + movingObject.width/2
          && fixedObject.x - movingObject.x < fixedObject.width/2 + movingObject.width/2
          && movingObject.y - fixedObject.y < fixedObject.height/2 + movingObject.height/2
          && fixedObject.y - movingObject.y < fixedObject.height/2 + movingObject.height/2) {
      return (true);
      }
      else {
      return (false);
      }
    }