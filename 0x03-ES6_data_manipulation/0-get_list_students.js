/*eslint-disable*/


function getListStudents(){
        const array = new Array()
        const data = [
                {id: 1, firstname: "Guillaume", location: "San Francisco"},
                {id: 2, firstname: "James", location: "Columbia"},
                {id: 3, firstname: "Serena", location: "San Francisco"}
        ]
        array.push(...data)
        return array
}

export default getListStudents;