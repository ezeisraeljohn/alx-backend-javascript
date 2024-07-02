/*eslint-disable*/


function getListStudents(){
        const array = new Array()
        const data = [
                { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
                { id: 2, firstName: 'James', location: 'Columbia' },
                { id: 5, firstName: 'Serena', location: 'San Francisco' }
              ]
        array.push(...data)
        return array
}

export default getListStudents;