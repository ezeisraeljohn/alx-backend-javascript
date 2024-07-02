/*eslint-disable*/


function createInt8TypedArray(length, position, value){

        const newArrayBuffer = new ArrayBuffer(length)
        const newView = new Int8Array(newArrayBuffer)

        if (length <= position){
                throw Error("Position outside range")
        }
        newView[position] = value

        return newArrayBuffer
}

export default createInt8TypedArray