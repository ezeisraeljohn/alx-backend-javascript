/*eslint-disable */

function getListStudentsIds(lists){

        if (!Array.isArray(lists)){
                return []
        }
        const myFunction = (studentlist) => {
                return studentlist.id;
        }
        const ids = lists.map(myFunction);

        return ids
}


export default getListStudentsIds