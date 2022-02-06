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