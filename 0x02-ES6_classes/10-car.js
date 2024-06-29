/* eslint-disable */

class Car{
        constructor(car, motor, color){
                this._car = car
                this._motor = motor,
                this._color = color
        }
        cloneCar(){
                return new this.constructor(this._car, this._motor, this._color)
        }
}

export default Car;