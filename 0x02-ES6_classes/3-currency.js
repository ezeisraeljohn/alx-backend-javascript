/* eslint-disable */


/**
 * Currency class that displays the currency and its code using the displayFullCurrency
 * @param {string} code - The code of the currency
 * @param {string} name - The name of the currency
 * @returns - A class object
 */
class Currency{
        constructor(code, name){
                this._code = code
                this._name = name
        }

        displayFullCurrency(){
                return `${this._name} (${this._code})`
        }
}

export default Currency