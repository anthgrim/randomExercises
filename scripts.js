let paramArray = ['a',7,'c'];


const isString = (array) => {
    for(let i = 0; i < array.length;i++){
        if(typeof(array[i]) !== 'string'){
            return 'not strings';
            break;
        }
    }
    return 'strings';
}

function arrayFlattener(pArray){
    let odArray = [];

    //Get the second dimension flat
    for(let i = 0; i < pArray.length; i++){
        if(pArray[i].length > 1){
            for(let j = 0; j < pArray[i].length; j++){
                odArray.push(pArray[i][j]);
            }

            //Evaluate if the recently added elements have more than one dimension each
            for(let k = 0; k < odArray.length; k ++){
                if(odArray[k].length > 1){
                    odArray = arrayFlattener(odArray)
                }
            }
            
        }else{
            odArray.push(pArray[i]);
        }

        
    }
    return odArray;
}