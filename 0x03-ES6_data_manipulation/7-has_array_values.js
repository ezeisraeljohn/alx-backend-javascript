

const  hasValuesFromArray = (set, array)=> {
        let hasElement = false;
        array.forEach(element => {
                if (set.has(element)){
                        hasElement = true;
                }else{
                        hasElement = false;
                }
        });
        return hasElement
}

export default hasValuesFromArray