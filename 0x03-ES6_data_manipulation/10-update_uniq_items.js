/*eslint-disable*/

const updateUniqueItems = (mapArg)=>{
        if ( !mapArg || !mapArg instanceof Map){
                throw Error("Cannot Process")
        }

        for (const key of mapArg.keys()){
                if (mapArg.get(key) === 1){
                        mapArg.set(key, 100)
                }
        }
        return mapArg
}
export default updateUniqueItems