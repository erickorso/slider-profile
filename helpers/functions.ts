export const getTranslateValues = (current: number, largoArray: number) => {
    const values = [];

    for (let i = 0; i < largoArray; i++) {
        if (i === current) {
            values.push(0);
        } else if (i < current) {
            values.push(-100);
        } else {
            values.push(100);
        }
    }

    return values;
}


export const findArr = (arr: string[]) => {
    return arr.filter((el, index, arr) => {
        //console.log(el, index, arr)
        return arr.indexOf(el) === index
    })
}

// var clients = ['Client1', 'Client2', 'Client2', 'Client3', 'Client2', 'Client3']
// console.log(findArr(clients))s