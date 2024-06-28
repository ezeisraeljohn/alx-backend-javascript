/* eslint-disable */

class Building {
        constructor(sqft) {
          if (this.constructor !== Building){
                this.evacuationWarningMessage()
          }
          this._sqft = sqft;
        }
      
        get sqft() {
          return this._sqft;
        }
      
        // Abstract method (no implementation)
        evacuationWarningMessage() {
          throw new Error("evacuationWarningMessage is not implemented");
        }
      }
export default Building