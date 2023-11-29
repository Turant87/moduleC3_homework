function checkPropInObj(str, obj) {
    return (str in obj);
}

const exampleObject = {
    name: 'John',
    age: 30,
    city: 'New York'
};

const propertyToCheck = 'age';
const propertyExists = checkPropInObj(propertyToCheck, exampleObject);
console.log(propertyExists);