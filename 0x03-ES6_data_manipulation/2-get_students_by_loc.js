/*eslint-disable */

function getStudentsByLocation(getListStudents, city){

        const studentByLocation = getListStudents.filter((getListStudent)=> getListStudent.location === city)
        return studentByLocation
}

export default getStudentsByLocation