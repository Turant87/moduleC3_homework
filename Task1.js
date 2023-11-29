function printObject (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}
printObject('Some')
console.log('*****************')

/*
Попробовал применить на примере
 */

const iPhone = {
    company: 'Apple',
    os: 'iOS',
    magSafe: 'Yes'
}

const iPhone12ProMax = Object.create(iPhone)

iPhone12ProMax.name = 'iPhone 12 Pro Max';
iPhone12ProMax.camera = '12 mp';
iPhone12ProMax.cost = 1000;

Object.getPrototypeOf(iPhone)

console.log('Вывод характеристик с наследованием:');
// Вывод характеристик с наследованием
for(let key in iPhone12ProMax){
    console.log(`${key} - ${iPhone12ProMax[key]}`)
}
console.log('*****************')

// Вывод характеристик без наследования

console.log('Вывод характеристик без наследования:');
for(let key in iPhone12ProMax){
    if(iPhone12ProMax.hasOwnProperty(key)){
        let spec = `${key} - ${iPhone12ProMax[key]}`
    console.log(spec)
    }
}
