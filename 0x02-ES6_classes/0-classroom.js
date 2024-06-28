

/**
 * ClassRoom class to create a class room with a maximum number of students
 * @param {number} maxClassRoom - The maximum number of students in the class room
 * @returns {ClassRoom} - A class room object
 * @constructor ClassRoom
 * @example
 * const classRoom = new ClassRoom(10)
 * console.log(classRoom)
 */
class ClassRoom{
        constructor(maxStudentsSize){
                this._maxStudentsSize = maxStudentsSize
        }
}

export default ClassRoom