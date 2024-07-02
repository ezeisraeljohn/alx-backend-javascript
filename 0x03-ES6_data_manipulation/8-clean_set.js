/*eslint-disable*/

const cleanSet = (set, startString)=>{
        const array = new Array()
        if(!startString){
                return ''
        }
        set.forEach(element => {
                if(element.includes(startString)){
                        array.push(element.replace(startString, ""))
                }
        });

        return array.join("-")
}

export default cleanSet