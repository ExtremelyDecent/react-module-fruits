/** random item choice */

function choice(items){
    let index = Math.floor(Math.random()*items.length);
    return items[index];
}

/**
 * returns a copy of the array after removing first item
 * 
 * returns undefined if item is not found
 */

function remove(item, items){
    for(let i = 0; i< items.length; i++){
        if (items[i] ===item){
            return[...items.slice(0,i), ...items.slice(i+1)];
        }
    }
}

export {choice, remove};