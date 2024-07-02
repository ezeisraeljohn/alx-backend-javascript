/*eslint-disable*/

function getListStudentsIds(getListStudents){

        if (!Array.isArray(getListStudents)){
                return []
        }
        const ids = getListStudents.map((getListStudent)=> getListStudent.id);

        return ids
}

export default getListStudentsIds