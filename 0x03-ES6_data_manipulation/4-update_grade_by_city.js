/*eslint-disable*/

function updateStudentGradeByCity(getListStudents, city, newGrades){

        const newStudents = getListStudents.filter((getListStudent)=> getListStudent.location === city ).map((getListStudent)=> {
                if (newGrades){
                        newGrades.forEach(newGrade => {
                                if(getListStudent.id === newGrade.studentId){
                                        getListStudent["grade"] = newGrade.grade
                                        
                                }                 
                        });

                }
                if(!getListStudent.grade){
                        getListStudent["grade"] = "N/A"
                }
                return getListStudent
        })
        return newStudents
}

export default updateStudentGradeByCity