/*eslint-disable */

function getListStudentsIds(lists){

        if (!Array.isArray(lists)){
                return []
        }
        const ids = lists.map((list)=> list.id);

        return ids
}


export default getListStudentsIds