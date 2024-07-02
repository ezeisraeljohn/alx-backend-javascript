/*eslint-disable */


function getStudentIdsSum(lists){
        const initialValue = 0;
        const sumAllIds = lists.reduce((counter, currentValue)=> counter + currentValue.id, initialValue)
        return sumAllIds
 }
 
 
 export default getStudentIdsSum